package shared

type TransitGatewayStateEnum string

const (
	TransitGatewayStateEnumPending   TransitGatewayStateEnum = "pending"
	TransitGatewayStateEnumAvailable TransitGatewayStateEnum = "available"
	TransitGatewayStateEnumModifying TransitGatewayStateEnum = "modifying"
	TransitGatewayStateEnumDeleting  TransitGatewayStateEnum = "deleting"
	TransitGatewayStateEnumDeleted   TransitGatewayStateEnum = "deleted"
)
