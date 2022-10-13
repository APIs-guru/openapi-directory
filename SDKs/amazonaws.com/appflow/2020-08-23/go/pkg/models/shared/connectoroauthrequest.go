package shared

type ConnectorOAuthRequest struct {
	AuthCode    *string `json:"authCode"`
	RedirectURI *string `json:"redirectUri"`
}
