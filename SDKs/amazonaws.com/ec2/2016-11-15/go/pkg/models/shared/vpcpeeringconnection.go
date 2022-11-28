package shared

import (
	"time"
)

// VpcPeeringConnection
// Describes a VPC peering connection.
type VpcPeeringConnection struct {
	AccepterVpcInfo        *VpcPeeringConnectionVpcInfo
	ExpirationTime         *time.Time
	RequesterVpcInfo       *VpcPeeringConnectionVpcInfo
	Status                 *VpcPeeringConnectionStateReason
	Tags                   []Tag
	VpcPeeringConnectionID *string
}
