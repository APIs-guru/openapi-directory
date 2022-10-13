package shared

type RateIncreaseCriteria struct {
	NumberOfNotifiedThings  *int64 `json:"numberOfNotifiedThings"`
	NumberOfSucceededThings *int64 `json:"numberOfSucceededThings"`
}
