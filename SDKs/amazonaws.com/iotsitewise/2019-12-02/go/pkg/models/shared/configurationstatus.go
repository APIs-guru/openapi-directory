package shared



type ConfigurationStatus struct {
    Error *ConfigurationErrorDetails `json:"error,omitempty"`
    State ConfigurationStateEnum `json:"state"`
    
}

