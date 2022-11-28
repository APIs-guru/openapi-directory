package shared

import (
	"time"
)

// FindingSummary
// Contains information about a finding.
type FindingSummary struct {
	Action               []string          `json:"action,omitempty"`
	AnalyzedAt           time.Time         `json:"analyzedAt"`
	Condition            map[string]string `json:"condition"`
	CreatedAt            time.Time         `json:"createdAt"`
	Error                *string           `json:"error,omitempty"`
	ID                   string            `json:"id"`
	IsPublic             *bool             `json:"isPublic,omitempty"`
	Principal            map[string]string `json:"principal,omitempty"`
	Resource             *string           `json:"resource,omitempty"`
	ResourceOwnerAccount string            `json:"resourceOwnerAccount"`
	ResourceType         ResourceTypeEnum  `json:"resourceType"`
	Sources              []FindingSource   `json:"sources,omitempty"`
	Status               FindingStatusEnum `json:"status"`
	UpdatedAt            time.Time         `json:"updatedAt"`
}
