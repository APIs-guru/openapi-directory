import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputDataConfig } from "./outputdataconfig";
import { VpcConfig } from "./vpcconfig";
/**
 * Provides information about a sentiment detection job.
**/
export declare class SentimentDetectionJobProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    endTime?: Date;
    inputDataConfig?: InputDataConfig;
    jobArn?: string;
    jobId?: string;
    jobName?: string;
    jobStatus?: JobStatusEnum;
    languageCode?: LanguageCodeEnum;
    message?: string;
    outputDataConfig?: OutputDataConfig;
    submitTime?: Date;
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
