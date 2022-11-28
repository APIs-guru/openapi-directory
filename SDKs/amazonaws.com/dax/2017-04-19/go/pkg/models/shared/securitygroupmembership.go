package shared

// SecurityGroupMembership
// An individual VPC security group and its status.
type SecurityGroupMembership struct {
	SecurityGroupIdentifier *string `json:"SecurityGroupIdentifier,omitempty"`
	Status                  *string `json:"Status,omitempty"`
}
