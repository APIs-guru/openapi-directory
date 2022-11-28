package shared

// CodeGenNode
// Represents a node in a directed acyclic graph (DAG)
type CodeGenNode struct {
	Args       []CodeGenNodeArg `json:"Args"`
	ID         string           `json:"Id"`
	LineNumber *int64           `json:"LineNumber,omitempty"`
	NodeType   string           `json:"NodeType"`
}
