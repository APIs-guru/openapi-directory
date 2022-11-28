package shared

// ImageConfiguration
// Describes the configuration that AWS App Runner uses to run an App Runner service using an image pulled from a source image repository.
type ImageConfiguration struct {
	Port                        *string           `json:"Port,omitempty"`
	RuntimeEnvironmentVariables map[string]string `json:"RuntimeEnvironmentVariables,omitempty"`
	StartCommand                *string           `json:"StartCommand,omitempty"`
}
