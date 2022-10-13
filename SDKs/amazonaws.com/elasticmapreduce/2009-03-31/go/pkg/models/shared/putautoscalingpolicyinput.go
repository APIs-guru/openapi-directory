package shared

type PutAutoScalingPolicyInput struct {
	AutoScalingPolicy AutoScalingPolicy `json:"AutoScalingPolicy"`
	ClusterID         string            `json:"ClusterId"`
	InstanceGroupID   string            `json:"InstanceGroupId"`
}
