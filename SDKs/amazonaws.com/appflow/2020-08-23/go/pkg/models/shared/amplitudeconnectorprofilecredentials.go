package shared

// AmplitudeConnectorProfileCredentials
//
//	The connector-specific credentials required when using Amplitude.
type AmplitudeConnectorProfileCredentials struct {
	APIKey    string `json:"apiKey"`
	SecretKey string `json:"secretKey"`
}
