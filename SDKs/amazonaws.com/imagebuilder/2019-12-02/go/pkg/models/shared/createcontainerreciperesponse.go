package shared



type CreateContainerRecipeResponse struct {
    ClientToken *string `json:"clientToken,omitempty"`
    ContainerRecipeArn *string `json:"containerRecipeArn,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

