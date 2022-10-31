package shared

type GetDataflowGraphResponse struct {
	DagEdges []CodeGenEdge `json:"DagEdges,omitempty"`
	DagNodes []CodeGenNode `json:"DagNodes,omitempty"`
}
