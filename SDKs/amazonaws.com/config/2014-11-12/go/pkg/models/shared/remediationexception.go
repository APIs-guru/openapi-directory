package shared

import (
	"time"
)

type RemediationException struct {
	ConfigRuleName string     `json:"ConfigRuleName"`
	ExpirationTime *time.Time `json:"ExpirationTime,omitempty"`
	Message        *string    `json:"Message,omitempty"`
	ResourceID     string     `json:"ResourceId"`
	ResourceType   string     `json:"ResourceType"`
}
