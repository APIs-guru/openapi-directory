package shared

import (
	"time"
)

type LdapsSettingInfo struct {
	LdapsStatus         *LdapsStatusEnum `json:"LDAPSStatus"`
	LdapsStatusReason   *string          `json:"LDAPSStatusReason"`
	LastUpdatedDateTime *time.Time       `json:"LastUpdatedDateTime"`
}
