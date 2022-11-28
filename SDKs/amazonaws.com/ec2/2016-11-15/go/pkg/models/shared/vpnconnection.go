package shared

// VpnConnection
// Describes a VPN connection.
type VpnConnection struct {
	Category                     *string
	CustomerGatewayConfiguration *string
	CustomerGatewayID            *string
	Options                      *VpnConnectionOptions
	Routes                       []VpnStaticRoute
	State                        *VpnStateEnum
	Tags                         []Tag
	TransitGatewayID             *string
	Type                         *GatewayTypeEnum
	VgwTelemetry                 []VgwTelemetry
	VpnConnectionID              *string
	VpnGatewayID                 *string
}
