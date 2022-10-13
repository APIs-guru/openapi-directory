package shared

type CodeConfigurationValues struct {
	BuildCommand                *string           `json:"BuildCommand"`
	Port                        *string           `json:"Port"`
	Runtime                     RuntimeEnum       `json:"Runtime"`
	RuntimeEnvironmentVariables map[string]string `json:"RuntimeEnvironmentVariables"`
	StartCommand                *string           `json:"StartCommand"`
}
