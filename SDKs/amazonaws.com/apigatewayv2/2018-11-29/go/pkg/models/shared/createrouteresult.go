package shared

type CreateRouteResult struct {
	APIGatewayManaged                *bool                           `json:"ApiGatewayManaged"`
	APIKeyRequired                   *bool                           `json:"ApiKeyRequired"`
	AuthorizationScopes              []string                        `json:"AuthorizationScopes"`
	AuthorizationType                *AuthorizationTypeEnum          `json:"AuthorizationType"`
	AuthorizerID                     *string                         `json:"AuthorizerId"`
	ModelSelectionExpression         *string                         `json:"ModelSelectionExpression"`
	OperationName                    *string                         `json:"OperationName"`
	RequestModels                    map[string]string               `json:"RequestModels"`
	RequestParameters                map[string]ParameterConstraints `json:"RequestParameters"`
	RouteID                          *string                         `json:"RouteId"`
	RouteKey                         *string                         `json:"RouteKey"`
	RouteResponseSelectionExpression *string                         `json:"RouteResponseSelectionExpression"`
	Target                           *string                         `json:"Target"`
}
