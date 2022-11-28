package shared

// NodegroupResources
// An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access.
type NodegroupResources struct {
	AutoScalingGroups         []AutoScalingGroup `json:"autoScalingGroups,omitempty"`
	RemoteAccessSecurityGroup *string            `json:"remoteAccessSecurityGroup,omitempty"`
}
