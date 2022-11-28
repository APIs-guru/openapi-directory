package shared

// LogConfiguration
// Log configuration options to send to a custom log driver for the container.
type LogConfiguration struct {
	LogDriver     LogDriverEnum     `json:"logDriver"`
	Options       map[string]string `json:"options,omitempty"`
	SecretOptions []Secret          `json:"secretOptions,omitempty"`
}
