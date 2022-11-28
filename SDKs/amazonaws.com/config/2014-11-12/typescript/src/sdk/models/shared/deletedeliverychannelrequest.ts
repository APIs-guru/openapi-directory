import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteDeliveryChannelRequest
/** 
 * The input for the <a>DeleteDeliveryChannel</a> action. The action accepts the following data, in JSON format. 
**/
export class DeleteDeliveryChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryChannelName" })
  deliveryChannelName: string;
}
