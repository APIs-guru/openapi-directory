package shared



type AutoScalingPolicyUpdate struct {
    PolicyName *string `json:"PolicyName,omitempty"`
    TargetTrackingScalingPolicyConfiguration AutoScalingTargetTrackingScalingPolicyConfigurationUpdate `json:"TargetTrackingScalingPolicyConfiguration"`
    
}

