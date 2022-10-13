package shared

type ClassifyDocumentResponse struct {
	Classes []DocumentClass `json:"Classes"`
	Labels  []DocumentLabel `json:"Labels"`
}
