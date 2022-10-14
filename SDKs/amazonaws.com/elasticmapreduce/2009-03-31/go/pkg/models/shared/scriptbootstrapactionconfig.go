package shared

type ScriptBootstrapActionConfig struct {
	Args []string `json:"Args,omitempty"`
	Path string   `json:"Path"`
}
