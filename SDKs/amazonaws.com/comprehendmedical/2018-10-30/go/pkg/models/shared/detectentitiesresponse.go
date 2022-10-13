package shared

type DetectEntitiesResponse struct {
	Entities           []Entity            `json:"Entities"`
	ModelVersion       string              `json:"ModelVersion"`
	PaginationToken    *string             `json:"PaginationToken"`
	UnmappedAttributes []UnmappedAttribute `json:"UnmappedAttributes"`
}
