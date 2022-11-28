package shared

import (
	"time"
)

// OrganizationConformancePackStatus
// Returns the status for an organization conformance pack in an organization.
type OrganizationConformancePackStatus struct {
	ErrorCode                       *string                        `json:"ErrorCode,omitempty"`
	ErrorMessage                    *string                        `json:"ErrorMessage,omitempty"`
	LastUpdateTime                  *time.Time                     `json:"LastUpdateTime,omitempty"`
	OrganizationConformancePackName string                         `json:"OrganizationConformancePackName"`
	Status                          OrganizationResourceStatusEnum `json:"Status"`
}
