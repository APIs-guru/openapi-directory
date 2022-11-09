import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { OutputDataConfig } from "./outputdataconfig";
import { VpcConfig } from "./vpcconfig";
/**
 * Provides information about a document classification job.
**/
export declare class DocumentClassificationJobProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    documentClassifierArn?: string;
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
