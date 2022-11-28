package shared

import (
	"time"
)

// VpcEndpoint
// Describes a VPC endpoint.
type VpcEndpoint struct {
	CreationTimestamp   *time.Time
	DNSEntries          []DNSEntry
	Groups              []SecurityGroupIdentifier
	LastError           *LastError
	NetworkInterfaceIds []string
	OwnerID             *string
	PolicyDocument      *string
	PrivateDNSEnabled   *bool
	RequesterManaged    *bool
	RouteTableIds       []string
	ServiceName         *string
	State               *StateEnum
	SubnetIds           []string
	Tags                []Tag
	VpcEndpointID       *string
	VpcEndpointType     *VpcEndpointTypeEnum
	VpcID               *string
}
