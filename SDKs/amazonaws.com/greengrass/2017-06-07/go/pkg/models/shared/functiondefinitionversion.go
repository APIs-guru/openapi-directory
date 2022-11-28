package shared

// FunctionDefinitionVersion
// Information about a function definition version.
type FunctionDefinitionVersion struct {
	DefaultConfig *FunctionDefaultConfig `json:"DefaultConfig,omitempty"`
	Functions     []Function             `json:"Functions,omitempty"`
}
