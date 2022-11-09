import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StepStateChangeReasonCodeEnum } from "./stepstatechangereasoncodeenum";


// StepStateChangeReason
/** 
 * The details of the step state change reason.
**/
export class StepStateChangeReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: StepStateChangeReasonCodeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
