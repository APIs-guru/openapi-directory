import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detailed information about an event to which you have subscribed.
**/
export declare class EventSubscription extends SpeakeasyBase {
    custSubscriptionId?: string;
    customerAwsId?: string;
    enabled?: boolean;
    eventCategoriesList?: string[];
    eventSubscriptionArn?: string;
    snsTopicArn?: string;
    sourceIdsList?: string[];
    sourceType?: string;
    status?: string;
    subscriptionCreationTime?: string;
}
