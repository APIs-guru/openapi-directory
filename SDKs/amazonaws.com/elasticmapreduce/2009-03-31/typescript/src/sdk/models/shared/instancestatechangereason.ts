import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStateChangeReasonCodeEnum } from "./instancestatechangereasoncodeenum";



// InstanceStateChangeReason
/** 
 * The details of the status change reason for the instance.
**/
export class InstanceStateChangeReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: InstanceStateChangeReasonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
