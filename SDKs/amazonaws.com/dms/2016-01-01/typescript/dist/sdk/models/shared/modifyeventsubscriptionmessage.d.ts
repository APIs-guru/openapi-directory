import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p/>
**/
export declare class ModifyEventSubscriptionMessage extends SpeakeasyBase {
    enabled?: boolean;
    eventCategories?: string[];
    snsTopicArn?: string;
    sourceType?: string;
    subscriptionName: string;
}
