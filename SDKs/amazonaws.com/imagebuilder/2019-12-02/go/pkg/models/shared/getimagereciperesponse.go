package shared

type GetImageRecipeResponse struct {
	ImageRecipe *ImageRecipe `json:"imageRecipe,omitempty"`
	RequestID   *string      `json:"requestId,omitempty"`
}
