import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionResult } from "./executionresult";
import { ExecutionStatusEnum } from "./executionstatusenum";
/**
 *  Specifies information about the past flow run instances for a given flow.
**/
export declare class ExecutionRecord extends SpeakeasyBase {
    dataPullEndTime?: Date;
    dataPullStartTime?: Date;
    executionId?: string;
    executionResult?: ExecutionResult;
    executionStatus?: ExecutionStatusEnum;
    lastUpdatedAt?: Date;
    startedAt?: Date;
}
