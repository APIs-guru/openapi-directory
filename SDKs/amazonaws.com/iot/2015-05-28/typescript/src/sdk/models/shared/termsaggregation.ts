import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TermsAggregation
/** 
 * Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value.
**/
export class TermsAggregation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxBuckets" })
  maxBuckets?: number;
}
