import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ImageScanningConfiguration } from "./imagescanningconfiguration";
import { ImageTagMutabilityEnum } from "./imagetagmutabilityenum";



// Repository
/** 
 * An object representing a repository.
**/
export class Repository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=imageScanningConfiguration" })
  imageScanningConfiguration?: ImageScanningConfiguration;

  @SpeakeasyMetadata({ data: "json, name=imageTagMutability" })
  imageTagMutability?: ImageTagMutabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryArn" })
  repositoryArn?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryUri" })
  repositoryUri?: string;
}
