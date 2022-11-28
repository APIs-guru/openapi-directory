package shared

// DatadogConnectorProfileCredentials
//
//	The connector-specific credentials required by Datadog.
type DatadogConnectorProfileCredentials struct {
	APIKey         string `json:"apiKey"`
	ApplicationKey string `json:"applicationKey"`
}
