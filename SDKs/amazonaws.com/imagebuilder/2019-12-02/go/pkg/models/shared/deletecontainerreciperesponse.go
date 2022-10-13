package shared

type DeleteContainerRecipeResponse struct {
	ContainerRecipeArn *string `json:"containerRecipeArn"`
	RequestID          *string `json:"requestId"`
}
