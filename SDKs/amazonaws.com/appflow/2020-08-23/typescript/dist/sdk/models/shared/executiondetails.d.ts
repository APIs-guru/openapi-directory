import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";
/**
 *  Describes the details of the flow run, including the timestamp, status, and message.
**/
export declare class ExecutionDetails extends SpeakeasyBase {
    mostRecentExecutionMessage?: string;
    mostRecentExecutionStatus?: ExecutionStatusEnum;
    mostRecentExecutionTime?: Date;
}
