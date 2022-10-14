package shared

type StatusDetailFilters struct {
	AccountID               *string                      `json:"AccountId,omitempty"`
	MemberAccountRuleStatus *MemberAccountRuleStatusEnum `json:"MemberAccountRuleStatus,omitempty"`
}
