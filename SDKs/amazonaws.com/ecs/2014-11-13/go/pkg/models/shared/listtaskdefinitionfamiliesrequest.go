package shared

type ListTaskDefinitionFamiliesRequest struct {
	FamilyPrefix *string                         `json:"familyPrefix"`
	MaxResults   *int64                          `json:"maxResults"`
	NextToken    *string                         `json:"nextToken"`
	Status       *TaskDefinitionFamilyStatusEnum `json:"status"`
}
