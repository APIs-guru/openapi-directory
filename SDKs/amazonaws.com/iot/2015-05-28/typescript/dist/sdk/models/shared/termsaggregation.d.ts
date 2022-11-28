import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value.
**/
export declare class TermsAggregation extends SpeakeasyBase {
    maxBuckets?: number;
}
