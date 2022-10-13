package shared

type ListProjectsInput struct {
	NextToken *string                `json:"nextToken"`
	SortBy    *ProjectSortByTypeEnum `json:"sortBy"`
	SortOrder *SortOrderTypeEnum     `json:"sortOrder"`
}
