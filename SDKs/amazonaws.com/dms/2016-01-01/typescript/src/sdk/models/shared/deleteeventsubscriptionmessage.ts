import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteEventSubscriptionMessage
/** 
 * <p/>
**/
export class DeleteEventSubscriptionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubscriptionName" })
  subscriptionName: string;
}
