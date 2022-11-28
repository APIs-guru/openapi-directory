import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionRecord } from "./executionrecord";
export declare class DescribeFlowExecutionRecordsResponse extends SpeakeasyBase {
    flowExecutions?: ExecutionRecord[];
    nextToken?: string;
}
