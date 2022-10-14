package shared

type DetectPhiResponse struct {
	Entities        []Entity `json:"Entities"`
	ModelVersion    string   `json:"ModelVersion"`
	PaginationToken *string  `json:"PaginationToken,omitempty"`
}
