package shared

type ListReportGroupsInput struct {
	MaxResults *int64                     `json:"maxResults"`
	NextToken  *string                    `json:"nextToken"`
	SortBy     *ReportGroupSortByTypeEnum `json:"sortBy"`
	SortOrder  *SortOrderTypeEnum         `json:"sortOrder"`
}
