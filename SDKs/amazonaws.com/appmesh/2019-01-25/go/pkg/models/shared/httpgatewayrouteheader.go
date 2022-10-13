package shared

type HTTPGatewayRouteHeader struct {
	Invert *bool              `json:"invert"`
	Match  *HeaderMatchMethod `json:"match"`
	Name   string             `json:"name"`
}
