package shared

type CodeGenNodeArg struct {
	Name  string `json:"Name"`
	Param *bool  `json:"Param,omitempty"`
	Value string `json:"Value"`
}
