package shared



type SetRiskConfigurationRequest struct {
    AccountTakeoverRiskConfiguration *AccountTakeoverRiskConfigurationType `json:"AccountTakeoverRiskConfiguration,omitempty"`
    ClientID *string `json:"ClientId,omitempty"`
    CompromisedCredentialsRiskConfiguration *CompromisedCredentialsRiskConfigurationType `json:"CompromisedCredentialsRiskConfiguration,omitempty"`
    RiskExceptionConfiguration *RiskExceptionConfigurationType `json:"RiskExceptionConfiguration,omitempty"`
    UserPoolID string `json:"UserPoolId"`
    
}

