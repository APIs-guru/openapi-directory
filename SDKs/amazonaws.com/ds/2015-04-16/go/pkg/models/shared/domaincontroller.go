package shared

import (
	"time"
)

// DomainController
// Contains information about the domain controllers for a specified directory.
type DomainController struct {
	AvailabilityZone          *string                     `json:"AvailabilityZone,omitempty"`
	DirectoryID               *string                     `json:"DirectoryId,omitempty"`
	DNSIPAddr                 *string                     `json:"DnsIpAddr,omitempty"`
	DomainControllerID        *string                     `json:"DomainControllerId,omitempty"`
	LaunchTime                *time.Time                  `json:"LaunchTime,omitempty"`
	Status                    *DomainControllerStatusEnum `json:"Status,omitempty"`
	StatusLastUpdatedDateTime *time.Time                  `json:"StatusLastUpdatedDateTime,omitempty"`
	StatusReason              *string                     `json:"StatusReason,omitempty"`
	SubnetID                  *string                     `json:"SubnetId,omitempty"`
	VpcID                     *string                     `json:"VpcId,omitempty"`
}
