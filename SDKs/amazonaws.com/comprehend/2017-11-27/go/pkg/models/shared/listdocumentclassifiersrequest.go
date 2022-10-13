package shared

type ListDocumentClassifiersRequest struct {
	Filter     *DocumentClassifierFilter `json:"Filter"`
	MaxResults *int64                    `json:"MaxResults"`
	NextToken  *string                   `json:"NextToken"`
}
