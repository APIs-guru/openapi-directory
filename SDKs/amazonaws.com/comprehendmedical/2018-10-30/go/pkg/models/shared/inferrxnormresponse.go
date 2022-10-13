package shared

type InferRxNormResponse struct {
	Entities        []RxNormEntity `json:"Entities"`
	ModelVersion    *string        `json:"ModelVersion"`
	PaginationToken *string        `json:"PaginationToken"`
}
