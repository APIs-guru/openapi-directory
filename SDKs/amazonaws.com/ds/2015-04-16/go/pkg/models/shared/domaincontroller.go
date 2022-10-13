package shared

import (
	"time"
)

type DomainController struct {
	AvailabilityZone          *string                     `json:"AvailabilityZone"`
	DirectoryID               *string                     `json:"DirectoryId"`
	DNSIPAddr                 *string                     `json:"DnsIpAddr"`
	DomainControllerID        *string                     `json:"DomainControllerId"`
	LaunchTime                *time.Time                  `json:"LaunchTime"`
	Status                    *DomainControllerStatusEnum `json:"Status"`
	StatusLastUpdatedDateTime *time.Time                  `json:"StatusLastUpdatedDateTime"`
	StatusReason              *string                     `json:"StatusReason"`
	SubnetID                  *string                     `json:"SubnetId"`
	VpcID                     *string                     `json:"VpcId"`
}
