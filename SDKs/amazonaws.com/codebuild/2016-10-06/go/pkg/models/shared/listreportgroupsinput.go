package shared

type ListReportGroupsInput struct {
	MaxResults *int64                     `json:"maxResults,omitempty"`
	NextToken  *string                    `json:"nextToken,omitempty"`
	SortBy     *ReportGroupSortByTypeEnum `json:"sortBy,omitempty"`
	SortOrder  *SortOrderTypeEnum         `json:"sortOrder,omitempty"`
}
