package shared

type PutAutoScalingPolicyOutput struct {
	AutoScalingPolicy *AutoScalingPolicyDescription `json:"AutoScalingPolicy"`
	ClusterArn        *string                       `json:"ClusterArn"`
	ClusterID         *string                       `json:"ClusterId"`
	InstanceGroupID   *string                       `json:"InstanceGroupId"`
}
