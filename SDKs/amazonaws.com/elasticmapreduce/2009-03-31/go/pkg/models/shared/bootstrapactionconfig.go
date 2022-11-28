package shared

// BootstrapActionConfig
// Configuration of a bootstrap action.
type BootstrapActionConfig struct {
	Name                  string                      `json:"Name"`
	ScriptBootstrapAction ScriptBootstrapActionConfig `json:"ScriptBootstrapAction"`
}
