package shared



type PutAutoScalingPolicyOutput struct {
    AutoScalingPolicy *AutoScalingPolicyDescription `json:"AutoScalingPolicy,omitempty"`
    ClusterArn *string `json:"ClusterArn,omitempty"`
    ClusterID *string `json:"ClusterId,omitempty"`
    InstanceGroupID *string `json:"InstanceGroupId,omitempty"`
    
}

