package shared

type ListTaskDefinitionsRequest struct {
	FamilyPrefix *string                   `json:"familyPrefix"`
	MaxResults   *int64                    `json:"maxResults"`
	NextToken    *string                   `json:"nextToken"`
	Sort         *SortOrderEnum            `json:"sort"`
	Status       *TaskDefinitionStatusEnum `json:"status"`
}
