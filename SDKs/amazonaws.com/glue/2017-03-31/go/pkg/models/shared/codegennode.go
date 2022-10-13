package shared

type CodeGenNode struct {
	Args       []CodeGenNodeArg `json:"Args"`
	ID         string           `json:"Id"`
	LineNumber *int64           `json:"LineNumber"`
	NodeType   string           `json:"NodeType"`
}
