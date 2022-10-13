package shared

import (
	"time"
)

type AssessmentFrameworkMetadata struct {
	Arn              *string            `json:"arn"`
	ComplianceType   *string            `json:"complianceType"`
	ControlSetsCount *int64             `json:"controlSetsCount"`
	ControlsCount    *int64             `json:"controlsCount"`
	CreatedAt        *time.Time         `json:"createdAt"`
	Description      *string            `json:"description"`
	ID               *string            `json:"id"`
	LastUpdatedAt    *time.Time         `json:"lastUpdatedAt"`
	Logo             *string            `json:"logo"`
	Name             *string            `json:"name"`
	Type             *FrameworkTypeEnum `json:"type"`
}
