package shared

import (
	"time"
)

type MemberAccountStatus struct {
	AccountID               string                      `json:"AccountId"`
	ConfigRuleName          string                      `json:"ConfigRuleName"`
	ErrorCode               *string                     `json:"ErrorCode"`
	ErrorMessage            *string                     `json:"ErrorMessage"`
	LastUpdateTime          *time.Time                  `json:"LastUpdateTime"`
	MemberAccountRuleStatus MemberAccountRuleStatusEnum `json:"MemberAccountRuleStatus"`
}
