package shared

type PhysicalConnectionRequirements struct {
	AvailabilityZone    *string  `json:"AvailabilityZone,omitempty"`
	SecurityGroupIDList []string `json:"SecurityGroupIdList,omitempty"`
	SubnetID            *string  `json:"SubnetId,omitempty"`
}
