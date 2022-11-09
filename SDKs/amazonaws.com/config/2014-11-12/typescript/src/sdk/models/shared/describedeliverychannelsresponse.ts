import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeliveryChannel } from "./deliverychannel";


// DescribeDeliveryChannelsResponse
/** 
 * The output for the <a>DescribeDeliveryChannels</a> action.
**/
export class DescribeDeliveryChannelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryChannels", elemType: shared.DeliveryChannel })
  deliveryChannels?: DeliveryChannel[];
}
