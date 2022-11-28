package shared

import (
	"time"
)

// LoadBalancer
// Information about a load balancer.
type LoadBalancer struct {
	AvailabilityZones     []AvailabilityZone
	CanonicalHostedZoneID *string
	CreatedTime           *time.Time
	CustomerOwnedIpv4Pool *string
	DNSName               *string
	IPAddressType         *IPAddressTypeEnum
	LoadBalancerArn       *string
	LoadBalancerName      *string
	Scheme                *LoadBalancerSchemeEnumEnum
	SecurityGroups        []string
	State                 *LoadBalancerState
	Type                  *LoadBalancerTypeEnumEnum
	VpcID                 *string
}
