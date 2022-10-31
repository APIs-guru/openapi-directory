package shared

type DescribeHsmResponse struct {
	AvailabilityZone      *string               `json:"AvailabilityZone,omitempty"`
	EniID                 *string               `json:"EniId,omitempty"`
	EniIP                 *string               `json:"EniIp,omitempty"`
	HsmArn                *string               `json:"HsmArn,omitempty"`
	HsmType               *string               `json:"HsmType,omitempty"`
	IamRoleArn            *string               `json:"IamRoleArn,omitempty"`
	Partitions            []string              `json:"Partitions,omitempty"`
	SerialNumber          *string               `json:"SerialNumber,omitempty"`
	ServerCertLastUpdated *string               `json:"ServerCertLastUpdated,omitempty"`
	ServerCertURI         *string               `json:"ServerCertUri,omitempty"`
	SoftwareVersion       *string               `json:"SoftwareVersion,omitempty"`
	SSHKeyLastUpdated     *string               `json:"SshKeyLastUpdated,omitempty"`
	SSHPublicKey          *string               `json:"SshPublicKey,omitempty"`
	Status                *HsmStatusEnum        `json:"Status,omitempty"`
	StatusDetails         *string               `json:"StatusDetails,omitempty"`
	SubnetID              *string               `json:"SubnetId,omitempty"`
	SubscriptionEndDate   *string               `json:"SubscriptionEndDate,omitempty"`
	SubscriptionStartDate *string               `json:"SubscriptionStartDate,omitempty"`
	SubscriptionType      *SubscriptionTypeEnum `json:"SubscriptionType,omitempty"`
	VendorName            *string               `json:"VendorName,omitempty"`
	VpcID                 *string               `json:"VpcId,omitempty"`
}
