package shared

// VpcSecurityGroupMembership
// Describes the status of a security group associated with the virtual private cloud (VPC) hosting your replication and DB instances.
type VpcSecurityGroupMembership struct {
	Status             *string `json:"Status,omitempty"`
	VpcSecurityGroupID *string `json:"VpcSecurityGroupId,omitempty"`
}
