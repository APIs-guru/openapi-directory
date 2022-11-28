package shared

// ComponentParameterDetail
// Defines a parameter that is used to provide configuration details for the component.
type ComponentParameterDetail struct {
	DefaultValue []string `json:"defaultValue,omitempty"`
	Description  *string  `json:"description,omitempty"`
	Name         string   `json:"name"`
	Type         string   `json:"type"`
}
