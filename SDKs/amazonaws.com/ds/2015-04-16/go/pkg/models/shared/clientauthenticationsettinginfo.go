package shared

import (
	"time"
)

// ClientAuthenticationSettingInfo
// Contains information about a client authentication method for a directory.
type ClientAuthenticationSettingInfo struct {
	LastUpdatedDateTime *time.Time                      `json:"LastUpdatedDateTime,omitempty"`
	Status              *ClientAuthenticationStatusEnum `json:"Status,omitempty"`
	Type                *ClientAuthenticationTypeEnum   `json:"Type,omitempty"`
}
