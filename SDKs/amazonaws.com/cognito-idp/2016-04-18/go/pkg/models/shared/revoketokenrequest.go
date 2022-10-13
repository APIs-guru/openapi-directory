package shared

type RevokeTokenRequest struct {
	ClientID     string  `json:"ClientId"`
	ClientSecret *string `json:"ClientSecret"`
	Token        string  `json:"Token"`
}
