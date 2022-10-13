package shared

type WorkflowGraph struct {
	Edges []Edge `json:"Edges"`
	Nodes []Node `json:"Nodes"`
}
