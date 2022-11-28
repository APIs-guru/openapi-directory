import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupStateChangeReasonCodeEnum } from "./instancegroupstatechangereasoncodeenum";



// InstanceGroupStateChangeReason
/** 
 * The status change reason details for the instance group.
**/
export class InstanceGroupStateChangeReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: InstanceGroupStateChangeReasonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
