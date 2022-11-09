import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteEventSubscriptionMessage
/** 
 * <p/>
**/
export class DeleteEventSubscriptionMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=SubscriptionName" })
  subscriptionName: string;
}
