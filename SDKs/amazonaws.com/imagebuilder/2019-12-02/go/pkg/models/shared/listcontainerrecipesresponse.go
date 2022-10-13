package shared

type ListContainerRecipesResponse struct {
	ContainerRecipeSummaryList []ContainerRecipeSummary `json:"containerRecipeSummaryList"`
	NextToken                  *string                  `json:"nextToken"`
	RequestID                  *string                  `json:"requestId"`
}
