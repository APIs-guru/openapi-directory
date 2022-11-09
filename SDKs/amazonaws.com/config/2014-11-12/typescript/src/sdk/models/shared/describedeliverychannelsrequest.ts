import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeDeliveryChannelsRequest
/** 
 * The input for the <a>DescribeDeliveryChannels</a> action.
**/
export class DescribeDeliveryChannelsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryChannelNames" })
  deliveryChannelNames?: string[];
}
