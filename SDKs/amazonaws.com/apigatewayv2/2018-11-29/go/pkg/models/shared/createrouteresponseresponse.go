package shared

type CreateRouteResponseResponse struct {
	ModelSelectionExpression *string                         `json:"ModelSelectionExpression"`
	ResponseModels           map[string]string               `json:"ResponseModels"`
	ResponseParameters       map[string]ParameterConstraints `json:"ResponseParameters"`
	RouteResponseID          *string                         `json:"RouteResponseId"`
	RouteResponseKey         *string                         `json:"RouteResponseKey"`
}
