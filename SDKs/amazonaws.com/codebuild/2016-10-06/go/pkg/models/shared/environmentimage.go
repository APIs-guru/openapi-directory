package shared

type EnvironmentImage struct {
	Description *string  `json:"description"`
	Name        *string  `json:"name"`
	Versions    []string `json:"versions"`
}
