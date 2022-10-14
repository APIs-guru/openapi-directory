package shared

import (
	"time"
)

type ScalingPolicy struct {
	Alarms                                   []Alarm                                   `json:"Alarms,omitempty"`
	CreationTime                             time.Time                                 `json:"CreationTime"`
	PolicyArn                                string                                    `json:"PolicyARN"`
	PolicyName                               string                                    `json:"PolicyName"`
	PolicyType                               PolicyTypeEnum                            `json:"PolicyType"`
	ResourceID                               string                                    `json:"ResourceId"`
	ScalableDimension                        ScalableDimensionEnum                     `json:"ScalableDimension"`
	ServiceNamespace                         ServiceNamespaceEnum                      `json:"ServiceNamespace"`
	StepScalingPolicyConfiguration           *StepScalingPolicyConfiguration           `json:"StepScalingPolicyConfiguration,omitempty"`
	TargetTrackingScalingPolicyConfiguration *TargetTrackingScalingPolicyConfiguration `json:"TargetTrackingScalingPolicyConfiguration,omitempty"`
}
