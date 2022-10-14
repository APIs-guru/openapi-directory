package shared

type CreateImageRecipeResponse struct {
	ClientToken    *string `json:"clientToken,omitempty"`
	ImageRecipeArn *string `json:"imageRecipeArn,omitempty"`
	RequestID      *string `json:"requestId,omitempty"`
}
