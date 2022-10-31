package shared



type PutManagedScalingPolicyInput struct {
    ClusterID string `json:"ClusterId"`
    ManagedScalingPolicy ManagedScalingPolicy `json:"ManagedScalingPolicy"`
    
}

