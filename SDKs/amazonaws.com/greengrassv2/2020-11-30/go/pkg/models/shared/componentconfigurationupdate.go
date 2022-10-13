package shared

type ComponentConfigurationUpdate struct {
	Merge *string  `json:"merge"`
	Reset []string `json:"reset"`
}
