package shared

import (
	"time"
)

// LoadBalancerDescription
// Information about a load balancer.
type LoadBalancerDescription struct {
	AvailabilityZones         []string
	BackendServerDescriptions []BackendServerDescription
	CanonicalHostedZoneName   *string
	CanonicalHostedZoneNameID *string
	CreatedTime               *time.Time
	DNSName                   *string
	HealthCheck               *HealthCheck
	Instances                 []Instance
	ListenerDescriptions      []ListenerDescription
	LoadBalancerName          *string
	Policies                  *Policies
	Scheme                    *string
	SecurityGroups            []string
	SourceSecurityGroup       *SourceSecurityGroup
	Subnets                   []string
	VpcID                     *string
}
