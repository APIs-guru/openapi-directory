import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StepStateChangeReasonCodeEnum } from "./stepstatechangereasoncodeenum";



// StepStateChangeReason
/** 
 * The details of the step state change reason.
**/
export class StepStateChangeReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: StepStateChangeReasonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
