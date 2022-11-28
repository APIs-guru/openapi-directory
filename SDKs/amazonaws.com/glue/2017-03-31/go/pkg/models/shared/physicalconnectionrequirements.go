package shared

// PhysicalConnectionRequirements
// Specifies the physical requirements for a connection.
type PhysicalConnectionRequirements struct {
	AvailabilityZone    *string  `json:"AvailabilityZone,omitempty"`
	SecurityGroupIDList []string `json:"SecurityGroupIdList,omitempty"`
	SubnetID            *string  `json:"SubnetId,omitempty"`
}
