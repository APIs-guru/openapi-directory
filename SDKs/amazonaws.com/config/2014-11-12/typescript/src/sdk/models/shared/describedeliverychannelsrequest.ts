import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeDeliveryChannelsRequest
/** 
 * The input for the <a>DescribeDeliveryChannels</a> action.
**/
export class DescribeDeliveryChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryChannelNames" })
  deliveryChannelNames?: string[];
}
