import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryChannel } from "./deliverychannel";


// PutDeliveryChannelRequest
/** 
 * The input for the <a>PutDeliveryChannel</a> action.
**/
export class PutDeliveryChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryChannel" })
  deliveryChannel: DeliveryChannel;
}
