import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// ItemCollectionMetrics
/** 
 * Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response.
**/
export class ItemCollectionMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ItemCollectionKey", elemType: AttributeValue })
  itemCollectionKey?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=SizeEstimateRangeGB" })
  sizeEstimateRangeGb?: number[];
}
