package shared

type ThrottleSettings struct {
	BurstLimit *int64   `json:"burstLimit"`
	RateLimit  *float64 `json:"rateLimit"`
}
