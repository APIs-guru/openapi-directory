package shared

type GetImageRecipeResponse struct {
	ImageRecipe *ImageRecipe `json:"imageRecipe"`
	RequestID   *string      `json:"requestId"`
}
