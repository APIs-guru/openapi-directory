package shared

type ListCrawlersRequest struct {
	MaxResults *int64            `json:"MaxResults"`
	NextToken  *string           `json:"NextToken"`
	Tags       map[string]string `json:"Tags"`
}
