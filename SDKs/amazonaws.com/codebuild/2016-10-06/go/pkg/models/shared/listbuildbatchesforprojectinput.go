package shared

type ListBuildBatchesForProjectInput struct {
	Filter      *BuildBatchFilter  `json:"filter"`
	MaxResults  *int64             `json:"maxResults"`
	NextToken   *string            `json:"nextToken"`
	ProjectName *string            `json:"projectName"`
	SortOrder   *SortOrderTypeEnum `json:"sortOrder"`
}
