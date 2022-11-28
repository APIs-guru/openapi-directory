import { SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionState } from "./jobexecutionstate";
export declare class UpdateJobExecutionResponse extends SpeakeasyBase {
    executionState?: JobExecutionState;
    jobDocument?: string;
}
