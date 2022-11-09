import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceGroupStateChangeReasonCodeEnum } from "./instancegroupstatechangereasoncodeenum";


// InstanceGroupStateChangeReason
/** 
 * The status change reason details for the instance group.
**/
export class InstanceGroupStateChangeReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: InstanceGroupStateChangeReasonCodeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
