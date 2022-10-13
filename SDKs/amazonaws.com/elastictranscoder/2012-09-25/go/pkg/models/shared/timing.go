package shared

type Timing struct {
	FinishTimeMillis *int64 `json:"FinishTimeMillis"`
	StartTimeMillis  *int64 `json:"StartTimeMillis"`
	SubmitTimeMillis *int64 `json:"SubmitTimeMillis"`
}
