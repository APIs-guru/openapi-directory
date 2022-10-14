package shared

type Timing struct {
	FinishTimeMillis *int64 `json:"FinishTimeMillis,omitempty"`
	StartTimeMillis  *int64 `json:"StartTimeMillis,omitempty"`
	SubmitTimeMillis *int64 `json:"SubmitTimeMillis,omitempty"`
}
