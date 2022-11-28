import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyEventSubscriptionMessage
/** 
 * <p/>
**/
export class ModifyEventSubscriptionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EventCategories" })
  eventCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionName" })
  subscriptionName: string;
}
