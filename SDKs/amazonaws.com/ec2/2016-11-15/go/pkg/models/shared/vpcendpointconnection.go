package shared

import (
	"time"
)

// VpcEndpointConnection
// Describes a VPC endpoint connection to a service.
type VpcEndpointConnection struct {
	CreationTimestamp       *time.Time
	DNSEntries              []DNSEntry
	GatewayLoadBalancerArns []string
	NetworkLoadBalancerArns []string
	ServiceID               *string
	VpcEndpointID           *string
	VpcEndpointOwner        *string
	VpcEndpointState        *StateEnum
}
