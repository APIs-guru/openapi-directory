import { SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";
/**
 * This data type is used as a response element in the <a>ListEventSubscriptions</a> action.
**/
export declare class Subscription extends SpeakeasyBase {
    eventSubscriptions: EventSubscription[];
    resourceArn: string;
    topicArn: string;
}
