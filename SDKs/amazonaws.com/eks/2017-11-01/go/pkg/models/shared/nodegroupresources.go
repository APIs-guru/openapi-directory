package shared

type NodegroupResources struct {
	AutoScalingGroups         []AutoScalingGroup `json:"autoScalingGroups,omitempty"`
	RemoteAccessSecurityGroup *string            `json:"remoteAccessSecurityGroup,omitempty"`
}
