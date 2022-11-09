import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventSubscription
/** 
 * Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation.
**/
export class EventSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustSubscriptionId" })
  custSubscriptionId?: string;

  @Metadata({ data: "json, name=CustomerAwsId" })
  customerAwsId?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=EventCategoriesList" })
  eventCategoriesList?: string[];

  @Metadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @Metadata({ data: "json, name=SourceIdsList" })
  sourceIdsList?: string[];

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=SubscriptionCreationTime" })
  subscriptionCreationTime?: string;
}
