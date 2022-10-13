package shared

type ListBuildsForProjectInput struct {
	NextToken   *string            `json:"nextToken"`
	ProjectName string             `json:"projectName"`
	SortOrder   *SortOrderTypeEnum `json:"sortOrder"`
}
