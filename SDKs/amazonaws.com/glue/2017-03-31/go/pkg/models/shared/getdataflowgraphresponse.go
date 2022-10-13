package shared

type GetDataflowGraphResponse struct {
	DagEdges []CodeGenEdge `json:"DagEdges"`
	DagNodes []CodeGenNode `json:"DagNodes"`
}
