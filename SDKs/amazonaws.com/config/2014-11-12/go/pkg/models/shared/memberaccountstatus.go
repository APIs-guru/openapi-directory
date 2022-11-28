package shared

import (
	"time"
)

// MemberAccountStatus
// Organization config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.
type MemberAccountStatus struct {
	AccountID               string                      `json:"AccountId"`
	ConfigRuleName          string                      `json:"ConfigRuleName"`
	ErrorCode               *string                     `json:"ErrorCode,omitempty"`
	ErrorMessage            *string                     `json:"ErrorMessage,omitempty"`
	LastUpdateTime          *time.Time                  `json:"LastUpdateTime,omitempty"`
	MemberAccountRuleStatus MemberAccountRuleStatusEnum `json:"MemberAccountRuleStatus"`
}
