package shared

type GetRouteResponsesResponse struct {
	Items     []RouteResponse `json:"Items"`
	NextToken *string         `json:"NextToken"`
}
