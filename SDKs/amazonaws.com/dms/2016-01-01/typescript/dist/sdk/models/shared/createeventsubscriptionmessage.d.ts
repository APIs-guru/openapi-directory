import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
/**
 * <p/>
**/
export declare class CreateEventSubscriptionMessage extends SpeakeasyBase {
    enabled?: boolean;
    eventCategories?: string[];
    snsTopicArn: string;
    sourceIds?: string[];
    sourceType?: string;
    subscriptionName: string;
    tags?: Tag[];
}
