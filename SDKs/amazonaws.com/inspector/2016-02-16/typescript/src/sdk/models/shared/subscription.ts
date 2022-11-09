import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventSubscription } from "./eventsubscription";


// Subscription
/** 
 * This data type is used as a response element in the <a>ListEventSubscriptions</a> action.
**/
export class Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventSubscriptions", elemType: shared.EventSubscription })
  eventSubscriptions: EventSubscription[];

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=topicArn" })
  topicArn: string;
}
