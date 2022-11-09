import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


// ItemCollectionMetrics
/** 
 * Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response.
**/
export class ItemCollectionMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=ItemCollectionKey", elemType: shared.AttributeValue })
  itemCollectionKey?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=SizeEstimateRangeGB" })
  sizeEstimateRangeGb?: number[];
}
