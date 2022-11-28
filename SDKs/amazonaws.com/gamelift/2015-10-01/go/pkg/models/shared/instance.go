package shared

import (
	"time"
)

// Instance
// <p>Represents an EC2 instance of virtual computing resources that hosts one or more game servers. In GameLift, a fleet can contain zero or more instances.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeInstances</a> </p>
type Instance struct {
	CreationTime    *time.Time           `json:"CreationTime,omitempty"`
	DNSName         *string              `json:"DnsName,omitempty"`
	FleetArn        *string              `json:"FleetArn,omitempty"`
	FleetID         *string              `json:"FleetId,omitempty"`
	InstanceID      *string              `json:"InstanceId,omitempty"`
	IPAddress       *string              `json:"IpAddress,omitempty"`
	Location        *string              `json:"Location,omitempty"`
	OperatingSystem *OperatingSystemEnum `json:"OperatingSystem,omitempty"`
	Status          *InstanceStatusEnum  `json:"Status,omitempty"`
	Type            *Ec2InstanceTypeEnum `json:"Type,omitempty"`
}
