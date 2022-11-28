package shared

import (
	"time"
)

// LdapsSettingInfo
// Contains general information about the LDAPS settings.
type LdapsSettingInfo struct {
	LdapsStatus         *LdapsStatusEnum `json:"LDAPSStatus,omitempty"`
	LdapsStatusReason   *string          `json:"LDAPSStatusReason,omitempty"`
	LastUpdatedDateTime *time.Time       `json:"LastUpdatedDateTime,omitempty"`
}
