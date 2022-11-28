package shared

// WorkflowGraph
// A workflow graph represents the complete workflow containing all the Glue components present in the workflow and all the directed connections between them.
type WorkflowGraph struct {
	Edges []Edge `json:"Edges,omitempty"`
	Nodes []Node `json:"Nodes,omitempty"`
}
