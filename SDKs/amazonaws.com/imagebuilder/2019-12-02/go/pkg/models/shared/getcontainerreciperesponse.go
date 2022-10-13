package shared

type GetContainerRecipeResponse struct {
	ContainerRecipe *ContainerRecipe `json:"containerRecipe"`
	RequestID       *string          `json:"requestId"`
}
