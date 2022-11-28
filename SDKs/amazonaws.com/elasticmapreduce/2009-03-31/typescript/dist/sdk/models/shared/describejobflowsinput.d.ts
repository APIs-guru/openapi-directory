import { SpeakeasyBase } from "../../../internal/utils";
import { JobFlowExecutionStateEnum } from "./jobflowexecutionstateenum";
/**
 *  The input for the <a>DescribeJobFlows</a> operation.
**/
export declare class DescribeJobFlowsInput extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    jobFlowIds?: string[];
    jobFlowStates?: JobFlowExecutionStateEnum[];
}
