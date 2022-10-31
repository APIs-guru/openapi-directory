package shared

import (
	"time"
)

type ScalingPlan struct {
	ApplicationSource   ApplicationSource         `json:"ApplicationSource"`
	CreationTime        *time.Time                `json:"CreationTime,omitempty"`
	ScalingInstructions []ScalingInstruction      `json:"ScalingInstructions"`
	ScalingPlanName     string                    `json:"ScalingPlanName"`
	ScalingPlanVersion  int64                     `json:"ScalingPlanVersion"`
	StatusCode          ScalingPlanStatusCodeEnum `json:"StatusCode"`
	StatusMessage       *string                   `json:"StatusMessage,omitempty"`
	StatusStartTime     *time.Time                `json:"StatusStartTime,omitempty"`
}
