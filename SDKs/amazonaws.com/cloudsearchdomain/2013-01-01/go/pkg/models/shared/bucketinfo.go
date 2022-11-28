package shared

// BucketInfo
// A container for the calculated facet values and counts.
type BucketInfo struct {
	Buckets []Bucket `json:"buckets,omitempty"`
}
