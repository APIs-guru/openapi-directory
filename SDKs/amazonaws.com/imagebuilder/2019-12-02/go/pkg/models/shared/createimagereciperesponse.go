package shared

type CreateImageRecipeResponse struct {
	ClientToken    *string `json:"clientToken"`
	ImageRecipeArn *string `json:"imageRecipeArn"`
	RequestID      *string `json:"requestId"`
}
