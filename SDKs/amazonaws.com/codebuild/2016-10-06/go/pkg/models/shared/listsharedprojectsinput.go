package shared

type ListSharedProjectsInput struct {
	MaxResults *int64                        `json:"maxResults"`
	NextToken  *string                       `json:"nextToken"`
	SortBy     *SharedResourceSortByTypeEnum `json:"sortBy"`
	SortOrder  *SortOrderTypeEnum            `json:"sortOrder"`
}
