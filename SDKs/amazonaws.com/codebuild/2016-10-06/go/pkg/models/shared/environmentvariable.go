package shared

type EnvironmentVariable struct {
	Name  string                       `json:"name"`
	Type  *EnvironmentVariableTypeEnum `json:"type,omitempty"`
	Value string                       `json:"value"`
}
