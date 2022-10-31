package shared



type ListNotificationRulesResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    NotificationRules []NotificationRuleSummary `json:"NotificationRules,omitempty"`
    
}

