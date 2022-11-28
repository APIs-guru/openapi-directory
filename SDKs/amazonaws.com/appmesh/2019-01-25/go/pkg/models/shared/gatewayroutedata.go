package shared

// GatewayRouteData
// An object that represents a gateway route returned by a describe operation.
type GatewayRouteData struct {
	GatewayRouteName   string             `json:"gatewayRouteName"`
	MeshName           string             `json:"meshName"`
	Metadata           ResourceMetadata   `json:"metadata"`
	Spec               GatewayRouteSpec   `json:"spec"`
	Status             GatewayRouteStatus `json:"status"`
	VirtualGatewayName string             `json:"virtualGatewayName"`
}
