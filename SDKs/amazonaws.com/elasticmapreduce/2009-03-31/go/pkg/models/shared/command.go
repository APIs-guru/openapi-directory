package shared

type Command struct {
	Args       []string `json:"Args"`
	Name       *string  `json:"Name"`
	ScriptPath *string  `json:"ScriptPath"`
}
