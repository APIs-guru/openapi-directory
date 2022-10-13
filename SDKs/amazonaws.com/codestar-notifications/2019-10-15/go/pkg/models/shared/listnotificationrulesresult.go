package shared

type ListNotificationRulesResult struct {
	NextToken         *string                   `json:"NextToken"`
	NotificationRules []NotificationRuleSummary `json:"NotificationRules"`
}
