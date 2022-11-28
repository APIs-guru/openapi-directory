package shared

// Bucket
// A count of documents that meets a specific aggregation criteria.
type Bucket struct {
	Count    *int64  `json:"count,omitempty"`
	KeyValue *string `json:"keyValue,omitempty"`
}
