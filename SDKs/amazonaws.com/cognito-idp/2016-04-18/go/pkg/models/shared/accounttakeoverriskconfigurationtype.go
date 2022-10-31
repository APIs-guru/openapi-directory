package shared

type AccountTakeoverRiskConfigurationType struct {
	Actions             AccountTakeoverActionsType `json:"Actions"`
	NotifyConfiguration *NotifyConfigurationType   `json:"NotifyConfiguration,omitempty"`
}
