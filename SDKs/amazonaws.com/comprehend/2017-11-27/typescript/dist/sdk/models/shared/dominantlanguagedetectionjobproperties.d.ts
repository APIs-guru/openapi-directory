import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { OutputDataConfig } from "./outputdataconfig";
import { VpcConfig } from "./vpcconfig";
/**
 * Provides information about a dominant language detection job.
**/
export declare class DominantLanguageDetectionJobProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    endTime?: Date;
    inputDataConfig?: InputDataConfig;
    jobArn?: string;
    jobId?: string;
    jobName?: string;
    jobStatus?: JobStatusEnum;
    message?: string;
    outputDataConfig?: OutputDataConfig;
    submitTime?: Date;
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
