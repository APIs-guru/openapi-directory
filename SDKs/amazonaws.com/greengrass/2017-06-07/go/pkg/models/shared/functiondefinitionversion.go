package shared

type FunctionDefinitionVersion struct {
	DefaultConfig *FunctionDefaultConfig `json:"DefaultConfig,omitempty"`
	Functions     []Function             `json:"Functions,omitempty"`
}
