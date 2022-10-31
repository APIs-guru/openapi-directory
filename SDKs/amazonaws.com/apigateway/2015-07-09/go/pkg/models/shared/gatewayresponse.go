package shared



type GatewayResponse struct {
    DefaultResponse *bool `json:"defaultResponse,omitempty"`
    ResponseParameters map[string]string `json:"responseParameters,omitempty"`
    ResponseTemplates map[string]string `json:"responseTemplates,omitempty"`
    ResponseType *GatewayResponseTypeEnum `json:"responseType,omitempty"`
    StatusCode *string `json:"statusCode,omitempty"`
    
}

