import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ImageScanningConfiguration } from "./imagescanningconfiguration";
import { ImageTagMutabilityEnum } from "./imagetagmutabilityenum";
import { Tag } from "./tag";
export declare class CreateRepositoryRequest extends SpeakeasyBase {
    encryptionConfiguration?: EncryptionConfiguration;
    imageScanningConfiguration?: ImageScanningConfiguration;
    imageTagMutability?: ImageTagMutabilityEnum;
    repositoryName: string;
    tags?: Tag[];
}
