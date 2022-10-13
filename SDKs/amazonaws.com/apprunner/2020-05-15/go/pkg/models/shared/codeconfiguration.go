package shared

type CodeConfiguration struct {
	CodeConfigurationValues *CodeConfigurationValues `json:"CodeConfigurationValues"`
	ConfigurationSource     ConfigurationSourceEnum  `json:"ConfigurationSource"`
}
