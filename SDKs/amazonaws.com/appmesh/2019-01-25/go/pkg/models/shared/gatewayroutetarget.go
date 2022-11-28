package shared

// GatewayRouteTarget
// An object that represents a gateway route target.
type GatewayRouteTarget struct {
	VirtualService GatewayRouteVirtualService `json:"virtualService"`
}
