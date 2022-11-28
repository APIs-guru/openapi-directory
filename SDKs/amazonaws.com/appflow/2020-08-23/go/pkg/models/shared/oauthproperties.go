package shared

// OAuthProperties
//
//	The OAuth properties required for OAuth type authentication.
type OAuthProperties struct {
	AuthCodeURL string   `json:"authCodeUrl"`
	OAuthScopes []string `json:"oAuthScopes"`
	TokenURL    string   `json:"tokenUrl"`
}
