import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityRecognizerInputDataConfig } from "./entityrecognizerinputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { EntityRecognizerMetadata } from "./entityrecognizermetadata";
import { ModelStatusEnum } from "./modelstatusenum";
import { VpcConfig } from "./vpcconfig";
/**
 * Describes information about an entity recognizer.
**/
export declare class EntityRecognizerProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    endTime?: Date;
    entityRecognizerArn?: string;
    inputDataConfig?: EntityRecognizerInputDataConfig;
    languageCode?: LanguageCodeEnum;
    message?: string;
    modelKmsKeyId?: string;
    recognizerMetadata?: EntityRecognizerMetadata;
    status?: ModelStatusEnum;
    submitTime?: Date;
    trainingEndTime?: Date;
    trainingStartTime?: Date;
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
