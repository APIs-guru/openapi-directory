package shared

import (
	"time"
)

// RemediationException
// An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type.
type RemediationException struct {
	ConfigRuleName string     `json:"ConfigRuleName"`
	ExpirationTime *time.Time `json:"ExpirationTime,omitempty"`
	Message        *string    `json:"Message,omitempty"`
	ResourceID     string     `json:"ResourceId"`
	ResourceType   string     `json:"ResourceType"`
}
