package shared

type ListImageRecipesResponse struct {
	ImageRecipeSummaryList []ImageRecipeSummary `json:"imageRecipeSummaryList"`
	NextToken              *string              `json:"nextToken"`
	RequestID              *string              `json:"requestId"`
}
