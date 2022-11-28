package shared

import (
	"time"
)

// OrganizationConformancePackDetailedStatus
// Organization conformance pack creation or deletion status in each member account. This includes the name of the conformance pack, the status, error code and error message when the conformance pack creation or deletion failed.
type OrganizationConformancePackDetailedStatus struct {
	AccountID           string                                 `json:"AccountId"`
	ConformancePackName string                                 `json:"ConformancePackName"`
	ErrorCode           *string                                `json:"ErrorCode,omitempty"`
	ErrorMessage        *string                                `json:"ErrorMessage,omitempty"`
	LastUpdateTime      *time.Time                             `json:"LastUpdateTime,omitempty"`
	Status              OrganizationResourceDetailedStatusEnum `json:"Status"`
}
