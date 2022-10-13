package shared

type SetRiskConfigurationRequest struct {
	AccountTakeoverRiskConfiguration        *AccountTakeoverRiskConfigurationType        `json:"AccountTakeoverRiskConfiguration"`
	ClientID                                *string                                      `json:"ClientId"`
	CompromisedCredentialsRiskConfiguration *CompromisedCredentialsRiskConfigurationType `json:"CompromisedCredentialsRiskConfiguration"`
	RiskExceptionConfiguration              *RiskExceptionConfigurationType              `json:"RiskExceptionConfiguration"`
	UserPoolID                              string                                       `json:"UserPoolId"`
}
