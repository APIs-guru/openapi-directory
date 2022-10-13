package shared

type DescribeIndexResponse struct {
	IndexName   *string          `json:"indexName"`
	IndexStatus *IndexStatusEnum `json:"indexStatus"`
	Schema      *string          `json:"schema"`
}
