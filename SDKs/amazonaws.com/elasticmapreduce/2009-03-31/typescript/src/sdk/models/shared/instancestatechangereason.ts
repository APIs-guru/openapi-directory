import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceStateChangeReasonCodeEnum } from "./instancestatechangereasoncodeenum";


// InstanceStateChangeReason
/** 
 * The details of the status change reason for the instance.
**/
export class InstanceStateChangeReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: InstanceStateChangeReasonCodeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
