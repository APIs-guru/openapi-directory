package shared

type ImageConfiguration struct {
	Port                        *string           `json:"Port"`
	RuntimeEnvironmentVariables map[string]string `json:"RuntimeEnvironmentVariables"`
	StartCommand                *string           `json:"StartCommand"`
}
