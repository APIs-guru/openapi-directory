package shared

type ClassifyDocumentResponse struct {
	Classes []DocumentClass `json:"Classes,omitempty"`
	Labels  []DocumentLabel `json:"Labels,omitempty"`
}
