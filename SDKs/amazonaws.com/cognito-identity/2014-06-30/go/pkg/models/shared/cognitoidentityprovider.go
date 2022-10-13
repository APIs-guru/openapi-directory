package shared

type CognitoIdentityProvider struct {
	ClientID             *string `json:"ClientId"`
	ProviderName         *string `json:"ProviderName"`
	ServerSideTokenCheck *bool   `json:"ServerSideTokenCheck"`
}
