package shared

// IoTJobRateIncreaseCriteria
// Contains information about criteria to meet before a job increases its rollout rate. Specify either <code>numberOfNotifiedThings</code> or <code>numberOfSucceededThings</code>.
type IoTJobRateIncreaseCriteria struct {
	NumberOfNotifiedThings  *int64 `json:"numberOfNotifiedThings,omitempty"`
	NumberOfSucceededThings *int64 `json:"numberOfSucceededThings,omitempty"`
}
