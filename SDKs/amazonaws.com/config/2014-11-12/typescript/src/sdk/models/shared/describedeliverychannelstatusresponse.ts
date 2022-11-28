import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryChannelStatus } from "./deliverychannelstatus";



// DescribeDeliveryChannelStatusResponse
/** 
 * The output for the <a>DescribeDeliveryChannelStatus</a> action.
**/
export class DescribeDeliveryChannelStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryChannelsStatus", elemType: DeliveryChannelStatus })
  deliveryChannelsStatus?: DeliveryChannelStatus[];
}
