package shared

type IoTJobRateIncreaseCriteria struct {
	NumberOfNotifiedThings  *int64 `json:"numberOfNotifiedThings"`
	NumberOfSucceededThings *int64 `json:"numberOfSucceededThings"`
}
