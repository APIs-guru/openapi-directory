package shared

import (
	"time"
)

type Finding struct {
	Action               []string          `json:"action"`
	AnalyzedAt           time.Time         `json:"analyzedAt"`
	Condition            map[string]string `json:"condition"`
	CreatedAt            time.Time         `json:"createdAt"`
	Error                *string           `json:"error"`
	ID                   string            `json:"id"`
	IsPublic             *bool             `json:"isPublic"`
	Principal            map[string]string `json:"principal"`
	Resource             *string           `json:"resource"`
	ResourceOwnerAccount string            `json:"resourceOwnerAccount"`
	ResourceType         ResourceTypeEnum  `json:"resourceType"`
	Sources              []FindingSource   `json:"sources"`
	Status               FindingStatusEnum `json:"status"`
	UpdatedAt            time.Time         `json:"updatedAt"`
}
