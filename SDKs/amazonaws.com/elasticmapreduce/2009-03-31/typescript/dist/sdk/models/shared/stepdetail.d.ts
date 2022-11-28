import { SpeakeasyBase } from "../../../internal/utils";
import { StepExecutionStatusDetail } from "./stepexecutionstatusdetail";
import { StepConfig } from "./stepconfig";
/**
 * Combines the execution state and configuration of a step.
**/
export declare class StepDetail extends SpeakeasyBase {
    executionStatusDetail: StepExecutionStatusDetail;
    stepConfig: StepConfig;
}
