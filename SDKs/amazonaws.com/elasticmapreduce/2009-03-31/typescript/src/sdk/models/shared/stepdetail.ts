import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StepExecutionStatusDetail } from "./stepexecutionstatusdetail";
import { StepConfig } from "./stepconfig";



// StepDetail
/** 
 * Combines the execution state and configuration of a step.
**/
export class StepDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExecutionStatusDetail" })
  executionStatusDetail: StepExecutionStatusDetail;

  @SpeakeasyMetadata({ data: "json, name=StepConfig" })
  stepConfig: StepConfig;
}
