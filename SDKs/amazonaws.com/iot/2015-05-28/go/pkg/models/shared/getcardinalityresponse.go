package shared

type GetCardinalityResponse struct {
	Cardinality *int64 `json:"cardinality,omitempty"`
}
