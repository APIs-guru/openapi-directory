import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemediationExecutionStepStateEnum } from "./remediationexecutionstepstateenum";



// RemediationExecutionStep
/** 
 * Name of the step from the SSM document.
**/
export class RemediationExecutionStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: RemediationExecutionStepStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StopTime" })
  stopTime?: Date;
}
