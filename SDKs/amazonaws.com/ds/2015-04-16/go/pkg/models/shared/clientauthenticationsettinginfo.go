package shared

import (
	"time"
)

type ClientAuthenticationSettingInfo struct {
	LastUpdatedDateTime *time.Time                      `json:"LastUpdatedDateTime,omitempty"`
	Status              *ClientAuthenticationStatusEnum `json:"Status,omitempty"`
	Type                *ClientAuthenticationTypeEnum   `json:"Type,omitempty"`
}
