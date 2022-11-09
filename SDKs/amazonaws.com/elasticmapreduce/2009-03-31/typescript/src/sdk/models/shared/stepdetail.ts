import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StepExecutionStatusDetail } from "./stepexecutionstatusdetail";
import { StepConfig } from "./stepconfig";


// StepDetail
/** 
 * Combines the execution state and configuration of a step.
**/
export class StepDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExecutionStatusDetail" })
  executionStatusDetail: StepExecutionStatusDetail;

  @Metadata({ data: "json, name=StepConfig" })
  stepConfig: StepConfig;
}
