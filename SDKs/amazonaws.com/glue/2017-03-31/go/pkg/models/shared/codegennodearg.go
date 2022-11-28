package shared

// CodeGenNodeArg
// An argument or property of a node.
type CodeGenNodeArg struct {
	Name  string `json:"Name"`
	Param *bool  `json:"Param,omitempty"`
	Value string `json:"Value"`
}
