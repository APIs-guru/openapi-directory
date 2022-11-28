package shared

// Command
// An entity describing an executable that runs on a cluster.
type Command struct {
	Args       []string `json:"Args,omitempty"`
	Name       *string  `json:"Name,omitempty"`
	ScriptPath *string  `json:"ScriptPath,omitempty"`
}
