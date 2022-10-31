package shared

import (
"time")

type LdapsSettingInfo struct {
    LdapsStatus *LdapsStatusEnum `json:"LDAPSStatus,omitempty"`
    LdapsStatusReason *string `json:"LDAPSStatusReason,omitempty"`
    LastUpdatedDateTime *time.Time `json:"LastUpdatedDateTime,omitempty"`
    
}

