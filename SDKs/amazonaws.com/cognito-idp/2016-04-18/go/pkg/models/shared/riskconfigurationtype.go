package shared

import (
	"time"
)

type RiskConfigurationType struct {
	AccountTakeoverRiskConfiguration        *AccountTakeoverRiskConfigurationType        `json:"AccountTakeoverRiskConfiguration,omitempty"`
	ClientID                                *string                                      `json:"ClientId,omitempty"`
	CompromisedCredentialsRiskConfiguration *CompromisedCredentialsRiskConfigurationType `json:"CompromisedCredentialsRiskConfiguration,omitempty"`
	LastModifiedDate                        *time.Time                                   `json:"LastModifiedDate,omitempty"`
	RiskExceptionConfiguration              *RiskExceptionConfigurationType              `json:"RiskExceptionConfiguration,omitempty"`
	UserPoolID                              *string                                      `json:"UserPoolId,omitempty"`
}
