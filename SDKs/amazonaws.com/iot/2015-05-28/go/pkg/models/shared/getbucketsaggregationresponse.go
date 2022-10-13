package shared

type GetBucketsAggregationResponse struct {
	Buckets    []Bucket `json:"buckets"`
	TotalCount *int64   `json:"totalCount"`
}
