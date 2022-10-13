package shared

import (
	"time"
)

type CustomRoutingAccelerator struct {
	AcceleratorArn   *string                             `json:"AcceleratorArn"`
	CreatedTime      *time.Time                          `json:"CreatedTime"`
	DNSName          *string                             `json:"DnsName"`
	Enabled          *bool                               `json:"Enabled"`
	IPAddressType    *IPAddressTypeEnum                  `json:"IpAddressType"`
	IPSets           []IPSet                             `json:"IpSets"`
	LastModifiedTime *time.Time                          `json:"LastModifiedTime"`
	Name             *string                             `json:"Name"`
	Status           *CustomRoutingAcceleratorStatusEnum `json:"Status"`
}
