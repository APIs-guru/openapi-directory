package shared

import (
"time")

type CustomRoutingAccelerator struct {
    AcceleratorArn *string `json:"AcceleratorArn,omitempty"`
    CreatedTime *time.Time `json:"CreatedTime,omitempty"`
    DNSName *string `json:"DnsName,omitempty"`
    Enabled *bool `json:"Enabled,omitempty"`
    IPAddressType *IPAddressTypeEnum `json:"IpAddressType,omitempty"`
    IPSets []IPSet `json:"IpSets,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    Name *string `json:"Name,omitempty"`
    Status *CustomRoutingAcceleratorStatusEnum `json:"Status,omitempty"`
    
}

