package shared



type CompromisedCredentialsRiskConfigurationType struct {
    Actions CompromisedCredentialsActionsType `json:"Actions"`
    EventFilter []EventFilterTypeEnum `json:"EventFilter,omitempty"`
    
}

