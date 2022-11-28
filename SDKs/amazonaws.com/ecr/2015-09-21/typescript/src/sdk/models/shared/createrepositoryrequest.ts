import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ImageScanningConfiguration } from "./imagescanningconfiguration";
import { ImageTagMutabilityEnum } from "./imagetagmutabilityenum";
import { Tag } from "./tag";



export class CreateRepositoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=imageScanningConfiguration" })
  imageScanningConfiguration?: ImageScanningConfiguration;

  @SpeakeasyMetadata({ data: "json, name=imageTagMutability" })
  imageTagMutability?: ImageTagMutabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
