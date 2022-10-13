package shared

import (
	"time"
)

type ScalingPolicy struct {
	Alarms                                   []Alarm                                   `json:"Alarms"`
	CreationTime                             time.Time                                 `json:"CreationTime"`
	PolicyArn                                string                                    `json:"PolicyARN"`
	PolicyName                               string                                    `json:"PolicyName"`
	PolicyType                               PolicyTypeEnum                            `json:"PolicyType"`
	ResourceID                               string                                    `json:"ResourceId"`
	ScalableDimension                        ScalableDimensionEnum                     `json:"ScalableDimension"`
	ServiceNamespace                         ServiceNamespaceEnum                      `json:"ServiceNamespace"`
	StepScalingPolicyConfiguration           *StepScalingPolicyConfiguration           `json:"StepScalingPolicyConfiguration"`
	TargetTrackingScalingPolicyConfiguration *TargetTrackingScalingPolicyConfiguration `json:"TargetTrackingScalingPolicyConfiguration"`
}
