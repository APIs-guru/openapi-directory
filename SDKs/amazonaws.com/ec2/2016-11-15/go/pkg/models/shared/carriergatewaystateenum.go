package shared

type CarrierGatewayStateEnum string

const (
	CarrierGatewayStateEnumPending   CarrierGatewayStateEnum = "pending"
	CarrierGatewayStateEnumAvailable CarrierGatewayStateEnum = "available"
	CarrierGatewayStateEnumDeleting  CarrierGatewayStateEnum = "deleting"
	CarrierGatewayStateEnumDeleted   CarrierGatewayStateEnum = "deleted"
)
