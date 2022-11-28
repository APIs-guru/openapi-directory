package shared

// CompromisedCredentialsRiskConfigurationType
// The compromised credentials risk configuration type.
type CompromisedCredentialsRiskConfigurationType struct {
	Actions     CompromisedCredentialsActionsType `json:"Actions"`
	EventFilter []EventFilterTypeEnum             `json:"EventFilter,omitempty"`
}
