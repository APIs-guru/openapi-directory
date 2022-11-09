import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RemediationExecutionStepStateEnum } from "./remediationexecutionstepstateenum";


// RemediationExecutionStep
/** 
 * Name of the step from the SSM document.
**/
export class RemediationExecutionStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=State" })
  state?: RemediationExecutionStepStateEnum;

  @Metadata({ data: "json, name=StopTime" })
  stopTime?: Date;
}
