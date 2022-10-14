package shared

import (
	"time"
)

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
