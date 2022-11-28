package shared

// CognitoIdentityProvider
// A provider representing an Amazon Cognito user pool and its client ID.
type CognitoIdentityProvider struct {
	ClientID             *string `json:"ClientId,omitempty"`
	ProviderName         *string `json:"ProviderName,omitempty"`
	ServerSideTokenCheck *bool   `json:"ServerSideTokenCheck,omitempty"`
}
