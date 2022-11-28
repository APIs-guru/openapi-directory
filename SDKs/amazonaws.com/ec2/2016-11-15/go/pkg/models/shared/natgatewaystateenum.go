package shared

type NatGatewayStateEnum string

const (
	NatGatewayStateEnumPending   NatGatewayStateEnum = "pending"
	NatGatewayStateEnumFailed    NatGatewayStateEnum = "failed"
	NatGatewayStateEnumAvailable NatGatewayStateEnum = "available"
	NatGatewayStateEnumDeleting  NatGatewayStateEnum = "deleting"
	NatGatewayStateEnumDeleted   NatGatewayStateEnum = "deleted"
)
