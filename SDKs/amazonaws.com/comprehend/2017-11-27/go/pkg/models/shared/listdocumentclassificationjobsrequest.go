package shared

type ListDocumentClassificationJobsRequest struct {
	Filter     *DocumentClassificationJobFilter `json:"Filter"`
	MaxResults *int64                           `json:"MaxResults"`
	NextToken  *string                          `json:"NextToken"`
}
