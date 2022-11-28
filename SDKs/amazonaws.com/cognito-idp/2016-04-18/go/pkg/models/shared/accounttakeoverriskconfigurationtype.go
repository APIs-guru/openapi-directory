package shared

// AccountTakeoverRiskConfigurationType
// Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.
type AccountTakeoverRiskConfigurationType struct {
	Actions             AccountTakeoverActionsType `json:"Actions"`
	NotifyConfiguration *NotifyConfigurationType   `json:"NotifyConfiguration,omitempty"`
}
