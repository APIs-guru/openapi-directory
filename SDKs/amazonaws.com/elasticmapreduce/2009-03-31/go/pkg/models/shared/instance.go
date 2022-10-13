package shared

type Instance struct {
	EbsVolumes       []EbsVolume     `json:"EbsVolumes"`
	Ec2InstanceID    *string         `json:"Ec2InstanceId"`
	ID               *string         `json:"Id"`
	InstanceFleetID  *string         `json:"InstanceFleetId"`
	InstanceGroupID  *string         `json:"InstanceGroupId"`
	InstanceType     *string         `json:"InstanceType"`
	Market           *MarketTypeEnum `json:"Market"`
	PrivateDNSName   *string         `json:"PrivateDnsName"`
	PrivateIPAddress *string         `json:"PrivateIpAddress"`
	PublicDNSName    *string         `json:"PublicDnsName"`
	PublicIPAddress  *string         `json:"PublicIpAddress"`
	Status           *InstanceStatus `json:"Status"`
}
