package shared

// StatusDetailFilters
// Status filter object to filter results based on specific member account ID or status type for an organization config rule.
type StatusDetailFilters struct {
	AccountID               *string                      `json:"AccountId,omitempty"`
	MemberAccountRuleStatus *MemberAccountRuleStatusEnum `json:"MemberAccountRuleStatus,omitempty"`
}
