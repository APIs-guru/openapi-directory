package shared



type MethodResponse struct {
    ResponseModels map[string]string `json:"responseModels,omitempty"`
    ResponseParameters map[string]bool `json:"responseParameters,omitempty"`
    StatusCode *string `json:"statusCode,omitempty"`
    
}

