package shared

// ScriptBootstrapActionConfig
// Configuration of the script to run during a bootstrap action.
type ScriptBootstrapActionConfig struct {
	Args []string `json:"Args,omitempty"`
	Path string   `json:"Path"`
}
