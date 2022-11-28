import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryChannel } from "./deliverychannel";



// DescribeDeliveryChannelsResponse
/** 
 * The output for the <a>DescribeDeliveryChannels</a> action.
**/
export class DescribeDeliveryChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryChannels", elemType: DeliveryChannel })
  deliveryChannels?: DeliveryChannel[];
}
