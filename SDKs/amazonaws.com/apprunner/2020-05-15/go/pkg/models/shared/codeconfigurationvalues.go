package shared

// CodeConfigurationValues
// Describes the basic configuration needed for building and running an AWS App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a <code>apprunner.yaml</code> file in the source code repository.
type CodeConfigurationValues struct {
	BuildCommand                *string           `json:"BuildCommand,omitempty"`
	Port                        *string           `json:"Port,omitempty"`
	Runtime                     RuntimeEnum       `json:"Runtime"`
	RuntimeEnvironmentVariables map[string]string `json:"RuntimeEnvironmentVariables,omitempty"`
	StartCommand                *string           `json:"StartCommand,omitempty"`
}
