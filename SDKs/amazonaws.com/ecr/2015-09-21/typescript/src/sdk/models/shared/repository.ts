import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ImageScanningConfiguration } from "./imagescanningconfiguration";
import { ImageTagMutabilityEnum } from "./imagetagmutabilityenum";


// Repository
/** 
 * An object representing a repository.
**/
export class Repository extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=encryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @Metadata({ data: "json, name=imageScanningConfiguration" })
  imageScanningConfiguration?: ImageScanningConfiguration;

  @Metadata({ data: "json, name=imageTagMutability" })
  imageTagMutability?: ImageTagMutabilityEnum;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryArn" })
  repositoryArn?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @Metadata({ data: "json, name=repositoryUri" })
  repositoryUri?: string;
}
