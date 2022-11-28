package shared

// SimpleScalingPolicyConfiguration
// An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied.
type SimpleScalingPolicyConfiguration struct {
	AdjustmentType    *AdjustmentTypeEnum `json:"AdjustmentType,omitempty"`
	CoolDown          *int64              `json:"CoolDown,omitempty"`
	ScalingAdjustment int64               `json:"ScalingAdjustment"`
}
