package shared

type ComponentParameterDetail struct {
	DefaultValue []string `json:"defaultValue"`
	Description  *string  `json:"description"`
	Name         string   `json:"name"`
	Type         string   `json:"type"`
}
