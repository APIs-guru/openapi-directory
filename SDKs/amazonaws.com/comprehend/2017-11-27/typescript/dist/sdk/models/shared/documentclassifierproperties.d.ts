import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ClassifierMetadata } from "./classifiermetadata";
import { DocumentClassifierInputDataConfig } from "./documentclassifierinputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { DocumentClassifierModeEnum } from "./documentclassifiermodeenum";
import { DocumentClassifierOutputDataConfig } from "./documentclassifieroutputdataconfig";
import { ModelStatusEnum } from "./modelstatusenum";
import { VpcConfig } from "./vpcconfig";
/**
 * Provides information about a document classifier.
**/
export declare class DocumentClassifierProperties extends SpeakeasyBase {
    classifierMetadata?: ClassifierMetadata;
    dataAccessRoleArn?: string;
    documentClassifierArn?: string;
    endTime?: Date;
    inputDataConfig?: DocumentClassifierInputDataConfig;
    languageCode?: LanguageCodeEnum;
    message?: string;
    mode?: DocumentClassifierModeEnum;
    modelKmsKeyId?: string;
    outputDataConfig?: DocumentClassifierOutputDataConfig;
    status?: ModelStatusEnum;
    submitTime?: Date;
    trainingEndTime?: Date;
    trainingStartTime?: Date;
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
