package shared

type ComponentConfigurationUpdate struct {
	Merge *string  `json:"merge,omitempty"`
	Reset []string `json:"reset,omitempty"`
}
