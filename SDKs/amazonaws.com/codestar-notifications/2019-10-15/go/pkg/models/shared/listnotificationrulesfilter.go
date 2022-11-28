package shared

// ListNotificationRulesFilter
// Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target.
type ListNotificationRulesFilter struct {
	Name  ListNotificationRulesFilterNameEnum `json:"Name"`
	Value string                              `json:"Value"`
}
