package shared

// SecurityGroup
// Contains information about a security group associated with a network interface. This data type is used as one of the elements of the <a>NetworkInterface</a> data type.
type SecurityGroup struct {
	GroupID   *string `json:"groupId,omitempty"`
	GroupName *string `json:"groupName,omitempty"`
}
