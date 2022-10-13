package shared

type ListBuildsInput struct {
	NextToken *string            `json:"nextToken"`
	SortOrder *SortOrderTypeEnum `json:"sortOrder"`
}
