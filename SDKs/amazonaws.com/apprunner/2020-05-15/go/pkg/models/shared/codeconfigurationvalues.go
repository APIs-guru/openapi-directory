package shared

type CodeConfigurationValues struct {
	BuildCommand                *string           `json:"BuildCommand,omitempty"`
	Port                        *string           `json:"Port,omitempty"`
	Runtime                     RuntimeEnum       `json:"Runtime"`
	RuntimeEnvironmentVariables map[string]string `json:"RuntimeEnvironmentVariables,omitempty"`
	StartCommand                *string           `json:"StartCommand,omitempty"`
}
