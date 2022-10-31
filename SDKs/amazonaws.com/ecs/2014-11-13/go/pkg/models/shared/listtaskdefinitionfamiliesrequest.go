package shared

type ListTaskDefinitionFamiliesRequest struct {
	FamilyPrefix *string                         `json:"familyPrefix,omitempty"`
	MaxResults   *int64                          `json:"maxResults,omitempty"`
	NextToken    *string                         `json:"nextToken,omitempty"`
	Status       *TaskDefinitionFamilyStatusEnum `json:"status,omitempty"`
}
