package shared

type BlueInstanceTerminationOption struct {
	Action                       *InstanceActionEnum `json:"action"`
	TerminationWaitTimeInMinutes *int64              `json:"terminationWaitTimeInMinutes"`
}
