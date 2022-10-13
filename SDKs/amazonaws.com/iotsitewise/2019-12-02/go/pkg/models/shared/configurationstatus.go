package shared

type ConfigurationStatus struct {
	Error *ConfigurationErrorDetails `json:"error"`
	State ConfigurationStateEnum     `json:"state"`
}
