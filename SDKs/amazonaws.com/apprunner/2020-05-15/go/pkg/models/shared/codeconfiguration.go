package shared

type CodeConfiguration struct {
	CodeConfigurationValues *CodeConfigurationValues `json:"CodeConfigurationValues,omitempty"`
	ConfigurationSource     ConfigurationSourceEnum  `json:"ConfigurationSource"`
}
