package shared

type DescribeHsmResponse struct {
	AvailabilityZone      *string               `json:"AvailabilityZone"`
	EniID                 *string               `json:"EniId"`
	EniIP                 *string               `json:"EniIp"`
	HsmArn                *string               `json:"HsmArn"`
	HsmType               *string               `json:"HsmType"`
	IamRoleArn            *string               `json:"IamRoleArn"`
	Partitions            []string              `json:"Partitions"`
	SerialNumber          *string               `json:"SerialNumber"`
	ServerCertLastUpdated *string               `json:"ServerCertLastUpdated"`
	ServerCertURI         *string               `json:"ServerCertUri"`
	SoftwareVersion       *string               `json:"SoftwareVersion"`
	SSHKeyLastUpdated     *string               `json:"SshKeyLastUpdated"`
	SSHPublicKey          *string               `json:"SshPublicKey"`
	Status                *HsmStatusEnum        `json:"Status"`
	StatusDetails         *string               `json:"StatusDetails"`
	SubnetID              *string               `json:"SubnetId"`
	SubscriptionEndDate   *string               `json:"SubscriptionEndDate"`
	SubscriptionStartDate *string               `json:"SubscriptionStartDate"`
	SubscriptionType      *SubscriptionTypeEnum `json:"SubscriptionType"`
	VendorName            *string               `json:"VendorName"`
	VpcID                 *string               `json:"VpcId"`
}
