package shared

type CreateScriptRequest struct {
	DagEdges []CodeGenEdge `json:"DagEdges"`
	DagNodes []CodeGenNode `json:"DagNodes"`
	Language *LanguageEnum `json:"Language"`
}
