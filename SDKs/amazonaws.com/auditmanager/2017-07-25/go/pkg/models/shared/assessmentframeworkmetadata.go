package shared

import (
	"time"
)

// AssessmentFrameworkMetadata
//
//	The metadata associated with a standard or custom framework.
type AssessmentFrameworkMetadata struct {
	Arn              *string            `json:"arn,omitempty"`
	ComplianceType   *string            `json:"complianceType,omitempty"`
	ControlSetsCount *int64             `json:"controlSetsCount,omitempty"`
	ControlsCount    *int64             `json:"controlsCount,omitempty"`
	CreatedAt        *time.Time         `json:"createdAt,omitempty"`
	Description      *string            `json:"description,omitempty"`
	ID               *string            `json:"id,omitempty"`
	LastUpdatedAt    *time.Time         `json:"lastUpdatedAt,omitempty"`
	Logo             *string            `json:"logo,omitempty"`
	Name             *string            `json:"name,omitempty"`
	Type             *FrameworkTypeEnum `json:"type,omitempty"`
}
