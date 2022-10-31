package shared

type WorkflowGraph struct {
	Edges []Edge `json:"Edges,omitempty"`
	Nodes []Node `json:"Nodes,omitempty"`
}
