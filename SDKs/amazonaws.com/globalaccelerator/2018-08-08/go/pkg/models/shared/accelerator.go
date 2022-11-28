package shared

import (
	"time"
)

// Accelerator
// An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers.
type Accelerator struct {
	AcceleratorArn   *string                `json:"AcceleratorArn,omitempty"`
	CreatedTime      *time.Time             `json:"CreatedTime,omitempty"`
	DNSName          *string                `json:"DnsName,omitempty"`
	Enabled          *bool                  `json:"Enabled,omitempty"`
	IPAddressType    *IPAddressTypeEnum     `json:"IpAddressType,omitempty"`
	IPSets           []IPSet                `json:"IpSets,omitempty"`
	LastModifiedTime *time.Time             `json:"LastModifiedTime,omitempty"`
	Name             *string                `json:"Name,omitempty"`
	Status           *AcceleratorStatusEnum `json:"Status,omitempty"`
}
