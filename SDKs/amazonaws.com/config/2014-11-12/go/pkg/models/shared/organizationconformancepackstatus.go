package shared

import (
	"time"
)

type OrganizationConformancePackStatus struct {
	ErrorCode                       *string                        `json:"ErrorCode"`
	ErrorMessage                    *string                        `json:"ErrorMessage"`
	LastUpdateTime                  *time.Time                     `json:"LastUpdateTime"`
	OrganizationConformancePackName string                         `json:"OrganizationConformancePackName"`
	Status                          OrganizationResourceStatusEnum `json:"Status"`
}
