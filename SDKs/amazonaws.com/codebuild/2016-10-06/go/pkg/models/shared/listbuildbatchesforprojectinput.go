package shared

type ListBuildBatchesForProjectInput struct {
	Filter      *BuildBatchFilter  `json:"filter,omitempty"`
	MaxResults  *int64             `json:"maxResults,omitempty"`
	NextToken   *string            `json:"nextToken,omitempty"`
	ProjectName *string            `json:"projectName,omitempty"`
	SortOrder   *SortOrderTypeEnum `json:"sortOrder,omitempty"`
}
