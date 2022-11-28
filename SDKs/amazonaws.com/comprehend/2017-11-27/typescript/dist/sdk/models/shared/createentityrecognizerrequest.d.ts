import { SpeakeasyBase } from "../../../internal/utils";
import { EntityRecognizerInputDataConfig } from "./entityrecognizerinputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";
export declare class CreateEntityRecognizerRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    dataAccessRoleArn: string;
    inputDataConfig: EntityRecognizerInputDataConfig;
    languageCode: LanguageCodeEnum;
    modelKmsKeyId?: string;
    recognizerName: string;
    tags?: Tag[];
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
