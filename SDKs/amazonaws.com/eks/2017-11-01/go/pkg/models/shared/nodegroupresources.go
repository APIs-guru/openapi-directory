package shared

type NodegroupResources struct {
	AutoScalingGroups         []AutoScalingGroup `json:"autoScalingGroups"`
	RemoteAccessSecurityGroup *string            `json:"remoteAccessSecurityGroup"`
}
