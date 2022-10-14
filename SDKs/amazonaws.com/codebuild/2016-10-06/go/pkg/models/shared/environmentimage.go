package shared

type EnvironmentImage struct {
	Description *string  `json:"description,omitempty"`
	Name        *string  `json:"name,omitempty"`
	Versions    []string `json:"versions,omitempty"`
}
