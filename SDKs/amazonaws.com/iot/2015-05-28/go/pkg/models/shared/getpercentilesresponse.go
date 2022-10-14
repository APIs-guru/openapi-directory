package shared

type GetPercentilesResponse struct {
	Percentiles []PercentPair `json:"percentiles,omitempty"`
}
