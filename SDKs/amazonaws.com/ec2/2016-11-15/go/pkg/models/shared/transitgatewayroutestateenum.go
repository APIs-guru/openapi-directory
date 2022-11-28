package shared

type TransitGatewayRouteStateEnum string

const (
	TransitGatewayRouteStateEnumPending   TransitGatewayRouteStateEnum = "pending"
	TransitGatewayRouteStateEnumActive    TransitGatewayRouteStateEnum = "active"
	TransitGatewayRouteStateEnumBlackhole TransitGatewayRouteStateEnum = "blackhole"
	TransitGatewayRouteStateEnumDeleting  TransitGatewayRouteStateEnum = "deleting"
	TransitGatewayRouteStateEnumDeleted   TransitGatewayRouteStateEnum = "deleted"
)
