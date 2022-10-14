package shared

type GetContainerRecipeResponse struct {
	ContainerRecipe *ContainerRecipe `json:"containerRecipe,omitempty"`
	RequestID       *string          `json:"requestId,omitempty"`
}
