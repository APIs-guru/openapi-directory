import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeliveryChannelStatus } from "./deliverychannelstatus";


// DescribeDeliveryChannelStatusResponse
/** 
 * The output for the <a>DescribeDeliveryChannelStatus</a> action.
**/
export class DescribeDeliveryChannelStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryChannelsStatus", elemType: shared.DeliveryChannelStatus })
  deliveryChannelsStatus?: DeliveryChannelStatus[];
}
