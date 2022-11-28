package shared

// CoipPool
// Describes a customer-owned address pool.
type CoipPool struct {
	LocalGatewayRouteTableID *string
	PoolArn                  *string
	PoolCidrs                []string
	PoolID                   *string
	Tags                     []Tag
}
