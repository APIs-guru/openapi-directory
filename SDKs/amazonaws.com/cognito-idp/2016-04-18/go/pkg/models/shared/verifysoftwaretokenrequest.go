package shared

type VerifySoftwareTokenRequest struct {
	AccessToken        *string `json:"AccessToken"`
	FriendlyDeviceName *string `json:"FriendlyDeviceName"`
	Session            *string `json:"Session"`
	UserCode           string  `json:"UserCode"`
}
