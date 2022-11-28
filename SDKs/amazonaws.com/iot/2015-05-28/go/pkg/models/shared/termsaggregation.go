package shared

// TermsAggregation
// Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value.
type TermsAggregation struct {
	MaxBuckets *int64 `json:"maxBuckets,omitempty"`
}
