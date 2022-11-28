package shared

import (
	"time"
)

// ScalingPolicy
// <p>Represents a scaling policy to use with Application Auto Scaling.</p> <p>For more information about configuring scaling policies for a specific service, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html">Getting started with Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
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
