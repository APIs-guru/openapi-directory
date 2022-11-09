import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation.
**/
export declare class EventSubscription extends SpeakeasyBase {
    custSubscriptionId?: string;
    customerAwsId?: string;
    enabled?: boolean;
    eventCategoriesList?: string[];
    snsTopicArn?: string;
    sourceIdsList?: string[];
    sourceType?: string;
    status?: string;
    subscriptionCreationTime?: string;
}
