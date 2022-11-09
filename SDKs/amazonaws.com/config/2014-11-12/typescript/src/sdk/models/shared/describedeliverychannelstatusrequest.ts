import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeDeliveryChannelStatusRequest
/** 
 * The input for the <a>DeliveryChannelStatus</a> action.
**/
export class DescribeDeliveryChannelStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryChannelNames" })
  deliveryChannelNames?: string[];
}
