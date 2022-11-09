import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailureDetails } from "./failuredetails";
import { StepStateEnum } from "./stepstateenum";
import { StepStateChangeReason } from "./stepstatechangereason";
import { StepTimeline } from "./steptimeline";


// StepStatus
/** 
 * The execution status details of the cluster step.
**/
export class StepStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailureDetails" })
  failureDetails?: FailureDetails;

  @Metadata({ data: "json, name=State" })
  state?: StepStateEnum;

  @Metadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: StepStateChangeReason;

  @Metadata({ data: "json, name=Timeline" })
  timeline?: StepTimeline;
}
