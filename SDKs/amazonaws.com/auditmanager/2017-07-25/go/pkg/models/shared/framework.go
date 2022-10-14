package shared

import (
	"time"
)

type Framework struct {
	Arn            *string            `json:"arn,omitempty"`
	ComplianceType *string            `json:"complianceType,omitempty"`
	ControlSets    []ControlSet       `json:"controlSets,omitempty"`
	ControlSources *string            `json:"controlSources,omitempty"`
	CreatedAt      *time.Time         `json:"createdAt,omitempty"`
	CreatedBy      *string            `json:"createdBy,omitempty"`
	Description    *string            `json:"description,omitempty"`
	ID             *string            `json:"id,omitempty"`
	LastUpdatedAt  *time.Time         `json:"lastUpdatedAt,omitempty"`
	LastUpdatedBy  *string            `json:"lastUpdatedBy,omitempty"`
	Logo           *string            `json:"logo,omitempty"`
	Name           *string            `json:"name,omitempty"`
	Tags           map[string]string  `json:"tags,omitempty"`
	Type           *FrameworkTypeEnum `json:"type,omitempty"`
}
