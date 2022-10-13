package shared

type ListBuildBatchesInput struct {
	Filter     *BuildBatchFilter  `json:"filter"`
	MaxResults *int64             `json:"maxResults"`
	NextToken  *string            `json:"nextToken"`
	SortOrder  *SortOrderTypeEnum `json:"sortOrder"`
}
