package shared

type UpdateRouteResponseResponse struct {
	ModelSelectionExpression *string                         `json:"ModelSelectionExpression,omitempty"`
	ResponseModels           map[string]string               `json:"ResponseModels,omitempty"`
	ResponseParameters       map[string]ParameterConstraints `json:"ResponseParameters,omitempty"`
	RouteResponseID          *string                         `json:"RouteResponseId,omitempty"`
	RouteResponseKey         *string                         `json:"RouteResponseKey,omitempty"`
}
