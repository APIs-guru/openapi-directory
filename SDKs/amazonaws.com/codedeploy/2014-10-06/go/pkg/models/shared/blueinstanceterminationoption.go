package shared

type BlueInstanceTerminationOption struct {
	Action                       *InstanceActionEnum `json:"action,omitempty"`
	TerminationWaitTimeInMinutes *int64              `json:"terminationWaitTimeInMinutes,omitempty"`
}
