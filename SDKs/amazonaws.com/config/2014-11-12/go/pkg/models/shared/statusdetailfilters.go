package shared

type StatusDetailFilters struct {
	AccountID               *string                      `json:"AccountId"`
	MemberAccountRuleStatus *MemberAccountRuleStatusEnum `json:"MemberAccountRuleStatus"`
}
