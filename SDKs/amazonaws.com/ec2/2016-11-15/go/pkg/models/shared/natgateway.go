package shared

import (
	"time"
)

// NatGateway
// Describes a NAT gateway.
type NatGateway struct {
	ConnectivityType     *ConnectivityTypeEnum
	CreateTime           *time.Time
	DeleteTime           *time.Time
	FailureCode          *string
	FailureMessage       *string
	NatGatewayAddresses  []NatGatewayAddress
	NatGatewayID         *string
	ProvisionedBandwidth *ProvisionedBandwidth
	State                *NatGatewayStateEnum
	SubnetID             *string
	Tags                 []Tag
	VpcID                *string
}
