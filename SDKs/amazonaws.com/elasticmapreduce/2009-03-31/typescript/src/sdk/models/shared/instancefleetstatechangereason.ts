import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceFleetStateChangeReasonCodeEnum } from "./instancefleetstatechangereasoncodeenum";


// InstanceFleetStateChangeReason
/** 
 * <p>Provides status change reason details for the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export class InstanceFleetStateChangeReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: InstanceFleetStateChangeReasonCodeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
