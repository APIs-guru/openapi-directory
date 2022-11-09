import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ImageScanningConfiguration } from "./imagescanningconfiguration";
import { ImageTagMutabilityEnum } from "./imagetagmutabilityenum";
import { Tag } from "./tag";


export class CreateRepositoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @Metadata({ data: "json, name=imageScanningConfiguration" })
  imageScanningConfiguration?: ImageScanningConfiguration;

  @Metadata({ data: "json, name=imageTagMutability" })
  imageTagMutability?: ImageTagMutabilityEnum;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
