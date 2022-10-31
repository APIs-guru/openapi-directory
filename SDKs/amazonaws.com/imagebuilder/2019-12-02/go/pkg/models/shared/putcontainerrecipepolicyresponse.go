package shared

type PutContainerRecipePolicyResponse struct {
	ContainerRecipeArn *string `json:"containerRecipeArn,omitempty"`
	RequestID          *string `json:"requestId,omitempty"`
}
