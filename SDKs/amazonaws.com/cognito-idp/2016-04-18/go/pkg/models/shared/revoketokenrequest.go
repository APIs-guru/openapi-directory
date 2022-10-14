package shared

type RevokeTokenRequest struct {
	ClientID     string  `json:"ClientId"`
	ClientSecret *string `json:"ClientSecret,omitempty"`
	Token        string  `json:"Token"`
}
