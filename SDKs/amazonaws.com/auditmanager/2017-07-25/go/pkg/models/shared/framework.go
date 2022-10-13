package shared

import (
	"time"
)

type Framework struct {
	Arn            *string            `json:"arn"`
	ComplianceType *string            `json:"complianceType"`
	ControlSets    []ControlSet       `json:"controlSets"`
	ControlSources *string            `json:"controlSources"`
	CreatedAt      *time.Time         `json:"createdAt"`
	CreatedBy      *string            `json:"createdBy"`
	Description    *string            `json:"description"`
	ID             *string            `json:"id"`
	LastUpdatedAt  *time.Time         `json:"lastUpdatedAt"`
	LastUpdatedBy  *string            `json:"lastUpdatedBy"`
	Logo           *string            `json:"logo"`
	Name           *string            `json:"name"`
	Tags           map[string]string  `json:"tags"`
	Type           *FrameworkTypeEnum `json:"type"`
}
