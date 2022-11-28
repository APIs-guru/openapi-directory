package shared

// CodeConfiguration
// Describes the configuration that AWS App Runner uses to build and run an App Runner service from a source code repository.
type CodeConfiguration struct {
	CodeConfigurationValues *CodeConfigurationValues `json:"CodeConfigurationValues,omitempty"`
	ConfigurationSource     ConfigurationSourceEnum  `json:"ConfigurationSource"`
}
