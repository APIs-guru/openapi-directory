package shared

import (
	"time"
)

type UserPoolClientType struct {
	AccessTokenValidity             *int64                              `json:"AccessTokenValidity"`
	AllowedOAuthFlows               []OAuthFlowTypeEnum                 `json:"AllowedOAuthFlows"`
	AllowedOAuthFlowsUserPoolClient *bool                               `json:"AllowedOAuthFlowsUserPoolClient"`
	AllowedOAuthScopes              []string                            `json:"AllowedOAuthScopes"`
	AnalyticsConfiguration          *AnalyticsConfigurationType         `json:"AnalyticsConfiguration"`
	CallbackUrLs                    []string                            `json:"CallbackURLs"`
	ClientID                        *string                             `json:"ClientId"`
	ClientName                      *string                             `json:"ClientName"`
	ClientSecret                    *string                             `json:"ClientSecret"`
	CreationDate                    *time.Time                          `json:"CreationDate"`
	DefaultRedirectURI              *string                             `json:"DefaultRedirectURI"`
	EnableTokenRevocation           *bool                               `json:"EnableTokenRevocation"`
	ExplicitAuthFlows               []ExplicitAuthFlowsTypeEnum         `json:"ExplicitAuthFlows"`
	IDTokenValidity                 *int64                              `json:"IdTokenValidity"`
	LastModifiedDate                *time.Time                          `json:"LastModifiedDate"`
	LogoutUrLs                      []string                            `json:"LogoutURLs"`
	PreventUserExistenceErrors      *PreventUserExistenceErrorTypesEnum `json:"PreventUserExistenceErrors"`
	ReadAttributes                  []string                            `json:"ReadAttributes"`
	RefreshTokenValidity            *int64                              `json:"RefreshTokenValidity"`
	SupportedIdentityProviders      []string                            `json:"SupportedIdentityProviders"`
	TokenValidityUnits              *TokenValidityUnitsType             `json:"TokenValidityUnits"`
	UserPoolID                      *string                             `json:"UserPoolId"`
	WriteAttributes                 []string                            `json:"WriteAttributes"`
}
