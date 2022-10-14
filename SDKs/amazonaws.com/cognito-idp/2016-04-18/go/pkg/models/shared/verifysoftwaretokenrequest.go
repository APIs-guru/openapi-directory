package shared

type VerifySoftwareTokenRequest struct {
	AccessToken        *string `json:"AccessToken,omitempty"`
	FriendlyDeviceName *string `json:"FriendlyDeviceName,omitempty"`
	Session            *string `json:"Session,omitempty"`
	UserCode           string  `json:"UserCode"`
}
