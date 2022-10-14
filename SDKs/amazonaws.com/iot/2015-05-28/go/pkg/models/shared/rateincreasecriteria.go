package shared

type RateIncreaseCriteria struct {
	NumberOfNotifiedThings  *int64 `json:"numberOfNotifiedThings,omitempty"`
	NumberOfSucceededThings *int64 `json:"numberOfSucceededThings,omitempty"`
}
