package shared

import (
	"time"
)

type OrganizationConformancePackDetailedStatus struct {
	AccountID           string                                 `json:"AccountId"`
	ConformancePackName string                                 `json:"ConformancePackName"`
	ErrorCode           *string                                `json:"ErrorCode"`
	ErrorMessage        *string                                `json:"ErrorMessage"`
	LastUpdateTime      *time.Time                             `json:"LastUpdateTime"`
	Status              OrganizationResourceDetailedStatusEnum `json:"Status"`
}
