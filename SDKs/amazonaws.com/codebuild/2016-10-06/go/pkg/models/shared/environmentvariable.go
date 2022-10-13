package shared

type EnvironmentVariable struct {
	Name  string                       `json:"name"`
	Type  *EnvironmentVariableTypeEnum `json:"type"`
	Value string                       `json:"value"`
}
