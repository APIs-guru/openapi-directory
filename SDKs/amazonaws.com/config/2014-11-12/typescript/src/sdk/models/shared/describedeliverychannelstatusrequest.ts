import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeDeliveryChannelStatusRequest
/** 
 * The input for the <a>DeliveryChannelStatus</a> action.
**/
export class DescribeDeliveryChannelStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryChannelNames" })
  deliveryChannelNames?: string[];
}
