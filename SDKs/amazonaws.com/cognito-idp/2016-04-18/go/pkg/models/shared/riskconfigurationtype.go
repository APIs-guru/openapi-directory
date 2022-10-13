package shared

import (
	"time"
)

type RiskConfigurationType struct {
	AccountTakeoverRiskConfiguration        *AccountTakeoverRiskConfigurationType        `json:"AccountTakeoverRiskConfiguration"`
	ClientID                                *string                                      `json:"ClientId"`
	CompromisedCredentialsRiskConfiguration *CompromisedCredentialsRiskConfigurationType `json:"CompromisedCredentialsRiskConfiguration"`
	LastModifiedDate                        *time.Time                                   `json:"LastModifiedDate"`
	RiskExceptionConfiguration              *RiskExceptionConfigurationType              `json:"RiskExceptionConfiguration"`
	UserPoolID                              *string                                      `json:"UserPoolId"`
}
