package shared

import (
	"time"
)

type PutRemediationExceptionsRequest struct {
	ConfigRuleName string                            `json:"ConfigRuleName"`
	ExpirationTime *time.Time                        `json:"ExpirationTime"`
	Message        *string                           `json:"Message"`
	ResourceKeys   []RemediationExceptionResourceKey `json:"ResourceKeys"`
}
