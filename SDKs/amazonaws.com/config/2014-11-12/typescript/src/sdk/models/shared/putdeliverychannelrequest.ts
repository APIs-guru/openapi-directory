import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryChannel } from "./deliverychannel";



// PutDeliveryChannelRequest
/** 
 * The input for the <a>PutDeliveryChannel</a> action.
**/
export class PutDeliveryChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryChannel" })
  deliveryChannel: DeliveryChannel;
}
