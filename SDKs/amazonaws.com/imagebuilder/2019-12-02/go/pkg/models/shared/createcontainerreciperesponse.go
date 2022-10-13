package shared

type CreateContainerRecipeResponse struct {
	ClientToken        *string `json:"clientToken"`
	ContainerRecipeArn *string `json:"containerRecipeArn"`
	RequestID          *string `json:"requestId"`
}
