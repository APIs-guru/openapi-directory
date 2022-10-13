package shared

type CPU struct {
	Architecture *string  `json:"architecture"`
	Clock        *float64 `json:"clock"`
	Frequency    *string  `json:"frequency"`
}
