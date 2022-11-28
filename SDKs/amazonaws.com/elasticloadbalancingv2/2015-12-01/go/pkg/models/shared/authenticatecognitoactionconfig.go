package shared

// AuthenticateCognitoActionConfig
// Request parameters to use when integrating with Amazon Cognito to authenticate users.
type AuthenticateCognitoActionConfig struct {
	AuthenticationRequestExtraParams map[string]string
	OnUnauthenticatedRequest         *AuthenticateCognitoActionConditionalBehaviorEnumEnum
	Scope                            *string
	SessionCookieName                *string
	SessionTimeout                   *int64
	UserPoolArn                      string
	UserPoolClientID                 string
	UserPoolDomain                   string
}
