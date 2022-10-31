package shared

type ListTaskDefinitionsRequest struct {
	FamilyPrefix *string                   `json:"familyPrefix,omitempty"`
	MaxResults   *int64                    `json:"maxResults,omitempty"`
	NextToken    *string                   `json:"nextToken,omitempty"`
	Sort         *SortOrderEnum            `json:"sort,omitempty"`
	Status       *TaskDefinitionStatusEnum `json:"status,omitempty"`
}
