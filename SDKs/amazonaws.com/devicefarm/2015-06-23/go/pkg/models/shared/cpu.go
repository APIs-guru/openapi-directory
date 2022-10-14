package shared

type CPU struct {
	Architecture *string  `json:"architecture,omitempty"`
	Clock        *float64 `json:"clock,omitempty"`
	Frequency    *string  `json:"frequency,omitempty"`
}
