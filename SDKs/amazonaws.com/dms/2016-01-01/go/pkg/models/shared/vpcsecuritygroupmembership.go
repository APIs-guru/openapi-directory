package shared

type VpcSecurityGroupMembership struct {
	Status             *string `json:"Status,omitempty"`
	VpcSecurityGroupID *string `json:"VpcSecurityGroupId,omitempty"`
}
