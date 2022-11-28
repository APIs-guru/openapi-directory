import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
/**
 * <p/>
**/
export declare class DescribeEventSubscriptionsMessage extends SpeakeasyBase {
    filters?: Filter[];
    marker?: string;
    maxRecords?: number;
    subscriptionName?: string;
}
