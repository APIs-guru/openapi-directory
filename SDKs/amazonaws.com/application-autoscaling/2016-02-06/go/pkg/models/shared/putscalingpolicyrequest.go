package shared

type PutScalingPolicyRequest struct {
	PolicyName                               string                                    `json:"PolicyName"`
	PolicyType                               *PolicyTypeEnum                           `json:"PolicyType"`
	ResourceID                               string                                    `json:"ResourceId"`
	ScalableDimension                        ScalableDimensionEnum                     `json:"ScalableDimension"`
	ServiceNamespace                         ServiceNamespaceEnum                      `json:"ServiceNamespace"`
	StepScalingPolicyConfiguration           *StepScalingPolicyConfiguration           `json:"StepScalingPolicyConfiguration"`
	TargetTrackingScalingPolicyConfiguration *TargetTrackingScalingPolicyConfiguration `json:"TargetTrackingScalingPolicyConfiguration"`
}
