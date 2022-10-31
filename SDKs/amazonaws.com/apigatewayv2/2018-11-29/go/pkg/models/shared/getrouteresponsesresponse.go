package shared



type GetRouteResponsesResponse struct {
    Items []RouteResponse `json:"Items,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

