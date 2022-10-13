package shared

import (
	"time"
)

type Instance struct {
	CreationTime    *time.Time           `json:"CreationTime"`
	DNSName         *string              `json:"DnsName"`
	FleetArn        *string              `json:"FleetArn"`
	FleetID         *string              `json:"FleetId"`
	InstanceID      *string              `json:"InstanceId"`
	IPAddress       *string              `json:"IpAddress"`
	Location        *string              `json:"Location"`
	OperatingSystem *OperatingSystemEnum `json:"OperatingSystem"`
	Status          *InstanceStatusEnum  `json:"Status"`
	Type            *Ec2InstanceTypeEnum `json:"Type"`
}
