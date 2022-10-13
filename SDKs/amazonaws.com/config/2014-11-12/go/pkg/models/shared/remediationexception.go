package shared

import (
	"time"
)

type RemediationException struct {
	ConfigRuleName string     `json:"ConfigRuleName"`
	ExpirationTime *time.Time `json:"ExpirationTime"`
	Message        *string    `json:"Message"`
	ResourceID     string     `json:"ResourceId"`
	ResourceType   string     `json:"ResourceType"`
}
