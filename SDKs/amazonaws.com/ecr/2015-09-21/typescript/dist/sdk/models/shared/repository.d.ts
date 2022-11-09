import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ImageScanningConfiguration } from "./imagescanningconfiguration";
import { ImageTagMutabilityEnum } from "./imagetagmutabilityenum";
/**
 * An object representing a repository.
**/
export declare class Repository extends SpeakeasyBase {
    createdAt?: Date;
    encryptionConfiguration?: EncryptionConfiguration;
    imageScanningConfiguration?: ImageScanningConfiguration;
    imageTagMutability?: ImageTagMutabilityEnum;
    registryId?: string;
    repositoryArn?: string;
    repositoryName?: string;
    repositoryUri?: string;
}
