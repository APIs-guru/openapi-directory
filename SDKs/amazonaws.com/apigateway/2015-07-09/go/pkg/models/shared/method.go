package shared



type Method struct {
    APIKeyRequired *bool `json:"apiKeyRequired,omitempty"`
    AuthorizationScopes []string `json:"authorizationScopes,omitempty"`
    AuthorizationType *string `json:"authorizationType,omitempty"`
    AuthorizerID *string `json:"authorizerId,omitempty"`
    HTTPMethod *string `json:"httpMethod,omitempty"`
    MethodIntegration *Integration `json:"methodIntegration,omitempty"`
    MethodResponses map[string]MethodResponse `json:"methodResponses,omitempty"`
    OperationName *string `json:"operationName,omitempty"`
    RequestModels map[string]string `json:"requestModels,omitempty"`
    RequestParameters map[string]bool `json:"requestParameters,omitempty"`
    RequestValidatorID *string `json:"requestValidatorId,omitempty"`
    
}

