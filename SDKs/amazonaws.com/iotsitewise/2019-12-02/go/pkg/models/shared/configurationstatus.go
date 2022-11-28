package shared

// ConfigurationStatus
// Contains current status information for the configuration.
type ConfigurationStatus struct {
	Error *ConfigurationErrorDetails `json:"error,omitempty"`
	State ConfigurationStateEnum     `json:"state"`
}
