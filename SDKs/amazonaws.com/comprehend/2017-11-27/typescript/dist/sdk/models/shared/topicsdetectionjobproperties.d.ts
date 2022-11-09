import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { OutputDataConfig } from "./outputdataconfig";
import { VpcConfig } from "./vpcconfig";
/**
 * Provides information about a topic detection job.
**/
export declare class TopicsDetectionJobProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    endTime?: Date;
    inputDataConfig?: InputDataConfig;
    jobArn?: string;
    jobId?: string;
    jobName?: string;
    jobStatus?: JobStatusEnum;
    message?: string;
    numberOfTopics?: number;
    outputDataConfig?: OutputDataConfig;
    submitTime?: Date;
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
