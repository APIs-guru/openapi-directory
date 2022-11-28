package shared

// EnvironmentVariable
// Information about an environment variable for a build project or a build.
type EnvironmentVariable struct {
	Name  string                       `json:"name"`
	Type  *EnvironmentVariableTypeEnum `json:"type,omitempty"`
	Value string                       `json:"value"`
}
