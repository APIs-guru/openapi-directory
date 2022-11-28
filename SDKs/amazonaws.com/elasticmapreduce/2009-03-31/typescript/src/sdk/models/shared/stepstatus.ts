import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailureDetails } from "./failuredetails";
import { StepStateEnum } from "./stepstateenum";
import { StepStateChangeReason } from "./stepstatechangereason";
import { StepTimeline } from "./steptimeline";



// StepStatus
/** 
 * The execution status details of the cluster step.
**/
export class StepStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailureDetails" })
  failureDetails?: FailureDetails;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: StepStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: StepStateChangeReason;

  @SpeakeasyMetadata({ data: "json, name=Timeline" })
  timeline?: StepTimeline;
}
