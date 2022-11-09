import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModifyEventSubscriptionMessage
/** 
 * <p/>
**/
export class ModifyEventSubscriptionMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=EventCategories" })
  eventCategories?: string[];

  @Metadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @Metadata({ data: "json, name=SubscriptionName" })
  subscriptionName: string;
}
