package shared

type GatewayRouteHostnameMatch struct {
	Exact  *string `json:"exact"`
	Suffix *string `json:"suffix"`
}
