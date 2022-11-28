import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryChannelStatus } from "./deliverychannelstatus";
/**
 * The output for the <a>DescribeDeliveryChannelStatus</a> action.
**/
export declare class DescribeDeliveryChannelStatusResponse extends SpeakeasyBase {
    deliveryChannelsStatus?: DeliveryChannelStatus[];
}
