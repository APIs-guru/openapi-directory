package shared

type ListReportsInput struct {
	Filter     *ReportFilter      `json:"filter"`
	MaxResults *int64             `json:"maxResults"`
	NextToken  *string            `json:"nextToken"`
	SortOrder  *SortOrderTypeEnum `json:"sortOrder"`
}
