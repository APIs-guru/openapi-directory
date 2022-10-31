package shared

type GetBucketsAggregationResponse struct {
	Buckets    []Bucket `json:"buckets,omitempty"`
	TotalCount *int64   `json:"totalCount,omitempty"`
}
