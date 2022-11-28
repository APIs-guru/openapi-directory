import { SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";
/**
 * Represents the output of <a>DescribeEventSubscriptions</a>.
**/
export declare class EventSubscriptionsMessage extends SpeakeasyBase {
    eventSubscriptionsList?: EventSubscription[];
    marker?: string;
}
