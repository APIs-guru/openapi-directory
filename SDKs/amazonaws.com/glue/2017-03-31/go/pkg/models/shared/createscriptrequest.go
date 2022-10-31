package shared

type CreateScriptRequest struct {
	DagEdges []CodeGenEdge `json:"DagEdges,omitempty"`
	DagNodes []CodeGenNode `json:"DagNodes,omitempty"`
	Language *LanguageEnum `json:"Language,omitempty"`
}
