package shared



type GetRouteResult struct {
    APIGatewayManaged *bool `json:"ApiGatewayManaged,omitempty"`
    APIKeyRequired *bool `json:"ApiKeyRequired,omitempty"`
    AuthorizationScopes []string `json:"AuthorizationScopes,omitempty"`
    AuthorizationType *AuthorizationTypeEnum `json:"AuthorizationType,omitempty"`
    AuthorizerID *string `json:"AuthorizerId,omitempty"`
    ModelSelectionExpression *string `json:"ModelSelectionExpression,omitempty"`
    OperationName *string `json:"OperationName,omitempty"`
    RequestModels map[string]string `json:"RequestModels,omitempty"`
    RequestParameters map[string]ParameterConstraints `json:"RequestParameters,omitempty"`
    RouteID *string `json:"RouteId,omitempty"`
    RouteKey *string `json:"RouteKey,omitempty"`
    RouteResponseSelectionExpression *string `json:"RouteResponseSelectionExpression,omitempty"`
    Target *string `json:"Target,omitempty"`
    
}

