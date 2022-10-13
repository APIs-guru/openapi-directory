package shared

type CreateUserPoolClientRequest struct {
	AccessTokenValidity             *int64                              `json:"AccessTokenValidity"`
	AllowedOAuthFlows               []OAuthFlowTypeEnum                 `json:"AllowedOAuthFlows"`
	AllowedOAuthFlowsUserPoolClient *bool                               `json:"AllowedOAuthFlowsUserPoolClient"`
	AllowedOAuthScopes              []string                            `json:"AllowedOAuthScopes"`
	AnalyticsConfiguration          *AnalyticsConfigurationType         `json:"AnalyticsConfiguration"`
	CallbackUrLs                    []string                            `json:"CallbackURLs"`
	ClientName                      string                              `json:"ClientName"`
	DefaultRedirectURI              *string                             `json:"DefaultRedirectURI"`
	EnableTokenRevocation           *bool                               `json:"EnableTokenRevocation"`
	ExplicitAuthFlows               []ExplicitAuthFlowsTypeEnum         `json:"ExplicitAuthFlows"`
	GenerateSecret                  *bool                               `json:"GenerateSecret"`
	IDTokenValidity                 *int64                              `json:"IdTokenValidity"`
	LogoutUrLs                      []string                            `json:"LogoutURLs"`
	PreventUserExistenceErrors      *PreventUserExistenceErrorTypesEnum `json:"PreventUserExistenceErrors"`
	ReadAttributes                  []string                            `json:"ReadAttributes"`
	RefreshTokenValidity            *int64                              `json:"RefreshTokenValidity"`
	SupportedIdentityProviders      []string                            `json:"SupportedIdentityProviders"`
	TokenValidityUnits              *TokenValidityUnitsType             `json:"TokenValidityUnits"`
	UserPoolID                      string                              `json:"UserPoolId"`
	WriteAttributes                 []string                            `json:"WriteAttributes"`
}
