package shared

import (
	"time"
)

type PutRemediationExceptionsRequest struct {
	ConfigRuleName string                            `json:"ConfigRuleName"`
	ExpirationTime *time.Time                        `json:"ExpirationTime,omitempty"`
	Message        *string                           `json:"Message,omitempty"`
	ResourceKeys   []RemediationExceptionResourceKey `json:"ResourceKeys"`
}
