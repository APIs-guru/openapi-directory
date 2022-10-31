package shared

type BootstrapActionConfig struct {
	Name                  string                      `json:"Name"`
	ScriptBootstrapAction ScriptBootstrapActionConfig `json:"ScriptBootstrapAction"`
}
