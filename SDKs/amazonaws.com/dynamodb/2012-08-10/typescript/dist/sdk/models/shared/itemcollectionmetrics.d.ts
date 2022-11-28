import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response.
**/
export declare class ItemCollectionMetrics extends SpeakeasyBase {
    itemCollectionKey?: Map<string, AttributeValue>;
    sizeEstimateRangeGb?: number[];
}
