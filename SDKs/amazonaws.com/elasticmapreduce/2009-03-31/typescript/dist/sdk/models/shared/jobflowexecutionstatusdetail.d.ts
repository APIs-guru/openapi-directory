import { SpeakeasyBase } from "../../../internal/utils";
import { JobFlowExecutionStateEnum } from "./jobflowexecutionstateenum";
/**
 * Describes the status of the cluster (job flow).
**/
export declare class JobFlowExecutionStatusDetail extends SpeakeasyBase {
    creationDateTime: Date;
    endDateTime?: Date;
    lastStateChangeReason?: string;
    readyDateTime?: Date;
    startDateTime?: Date;
    state: JobFlowExecutionStateEnum;
}
