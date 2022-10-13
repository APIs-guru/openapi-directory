package shared

type PhysicalConnectionRequirements struct {
	AvailabilityZone    *string  `json:"AvailabilityZone"`
	SecurityGroupIDList []string `json:"SecurityGroupIdList"`
	SubnetID            *string  `json:"SubnetId"`
}
