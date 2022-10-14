package shared

type GatewayRouteHostnameMatch struct {
	Exact  *string `json:"exact,omitempty"`
	Suffix *string `json:"suffix,omitempty"`
}
