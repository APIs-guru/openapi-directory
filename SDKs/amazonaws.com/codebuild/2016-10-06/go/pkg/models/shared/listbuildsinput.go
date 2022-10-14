package shared

type ListBuildsInput struct {
	NextToken *string            `json:"nextToken,omitempty"`
	SortOrder *SortOrderTypeEnum `json:"sortOrder,omitempty"`
}
