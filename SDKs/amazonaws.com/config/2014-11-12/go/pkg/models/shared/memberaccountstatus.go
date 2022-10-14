package shared

import (
	"time"
)

type MemberAccountStatus struct {
	AccountID               string                      `json:"AccountId"`
	ConfigRuleName          string                      `json:"ConfigRuleName"`
	ErrorCode               *string                     `json:"ErrorCode,omitempty"`
	ErrorMessage            *string                     `json:"ErrorMessage,omitempty"`
	LastUpdateTime          *time.Time                  `json:"LastUpdateTime,omitempty"`
	MemberAccountRuleStatus MemberAccountRuleStatusEnum `json:"MemberAccountRuleStatus"`
}
