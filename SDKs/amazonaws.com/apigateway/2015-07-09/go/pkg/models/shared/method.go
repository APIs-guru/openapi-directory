package shared

type Method struct {
	APIKeyRequired      *bool                     `json:"apiKeyRequired"`
	AuthorizationScopes []string                  `json:"authorizationScopes"`
	AuthorizationType   *string                   `json:"authorizationType"`
	AuthorizerID        *string                   `json:"authorizerId"`
	HTTPMethod          *string                   `json:"httpMethod"`
	MethodIntegration   *Integration              `json:"methodIntegration"`
	MethodResponses     map[string]MethodResponse `json:"methodResponses"`
	OperationName       *string                   `json:"operationName"`
	RequestModels       map[string]string         `json:"requestModels"`
	RequestParameters   map[string]bool           `json:"requestParameters"`
	RequestValidatorID  *string                   `json:"requestValidatorId"`
}
