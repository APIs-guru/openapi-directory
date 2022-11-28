import { SpeakeasyBase } from "../../../internal/utils";
import { FilterRule } from "./filterrule";
import { Options } from "./options";
import { TaskExecutionResultDetail } from "./taskexecutionresultdetail";
import { TaskExecutionStatusEnum } from "./taskexecutionstatusenum";
/**
 * DescribeTaskExecutionResponse
**/
export declare class DescribeTaskExecutionResponse extends SpeakeasyBase {
    bytesTransferred?: number;
    bytesWritten?: number;
    estimatedBytesToTransfer?: number;
    estimatedFilesToTransfer?: number;
    excludes?: FilterRule[];
    filesTransferred?: number;
    includes?: FilterRule[];
    options?: Options;
    result?: TaskExecutionResultDetail;
    startTime?: Date;
    status?: TaskExecutionStatusEnum;
    taskExecutionArn?: string;
}
