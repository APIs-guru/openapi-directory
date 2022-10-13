package shared

type FunctionDefinitionVersion struct {
	DefaultConfig *FunctionDefaultConfig `json:"DefaultConfig"`
	Functions     []Function             `json:"Functions"`
}
