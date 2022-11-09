import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteDeliveryChannelRequest
/** 
 * The input for the <a>DeleteDeliveryChannel</a> action. The action accepts the following data, in JSON format. 
**/
export class DeleteDeliveryChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryChannelName" })
  deliveryChannelName: string;
}
