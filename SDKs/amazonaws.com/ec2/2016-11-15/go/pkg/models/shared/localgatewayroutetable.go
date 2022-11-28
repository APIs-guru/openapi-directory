package shared

// LocalGatewayRouteTable
// Describes a local gateway route table.
type LocalGatewayRouteTable struct {
	LocalGatewayID            *string
	LocalGatewayRouteTableArn *string
	LocalGatewayRouteTableID  *string
	OutpostArn                *string
	OwnerID                   *string
	State                     *string
	Tags                      []Tag
}
