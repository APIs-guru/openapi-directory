package shared

type Instance struct {
	EbsVolumes       []EbsVolume     `json:"EbsVolumes,omitempty"`
	Ec2InstanceID    *string         `json:"Ec2InstanceId,omitempty"`
	ID               *string         `json:"Id,omitempty"`
	InstanceFleetID  *string         `json:"InstanceFleetId,omitempty"`
	InstanceGroupID  *string         `json:"InstanceGroupId,omitempty"`
	InstanceType     *string         `json:"InstanceType,omitempty"`
	Market           *MarketTypeEnum `json:"Market,omitempty"`
	PrivateDNSName   *string         `json:"PrivateDnsName,omitempty"`
	PrivateIPAddress *string         `json:"PrivateIpAddress,omitempty"`
	PublicDNSName    *string         `json:"PublicDnsName,omitempty"`
	PublicIPAddress  *string         `json:"PublicIpAddress,omitempty"`
	Status           *InstanceStatus `json:"Status,omitempty"`
}
