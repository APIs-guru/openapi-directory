package shared

type LocalGatewayRouteStateEnum string

const (
	LocalGatewayRouteStateEnumPending   LocalGatewayRouteStateEnum = "pending"
	LocalGatewayRouteStateEnumActive    LocalGatewayRouteStateEnum = "active"
	LocalGatewayRouteStateEnumBlackhole LocalGatewayRouteStateEnum = "blackhole"
	LocalGatewayRouteStateEnumDeleting  LocalGatewayRouteStateEnum = "deleting"
	LocalGatewayRouteStateEnumDeleted   LocalGatewayRouteStateEnum = "deleted"
)
