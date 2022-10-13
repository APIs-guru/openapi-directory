package shared

import (
	"time"
)

type ClientAuthenticationSettingInfo struct {
	LastUpdatedDateTime *time.Time                      `json:"LastUpdatedDateTime"`
	Status              *ClientAuthenticationStatusEnum `json:"Status"`
	Type                *ClientAuthenticationTypeEnum   `json:"Type"`
}
