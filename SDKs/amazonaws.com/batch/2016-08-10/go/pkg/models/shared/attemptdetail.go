package shared

type AttemptDetail struct {
	Container    *AttemptContainerDetail `json:"container"`
	StartedAt    *int64                  `json:"startedAt"`
	StatusReason *string                 `json:"statusReason"`
	StoppedAt    *int64                  `json:"stoppedAt"`
}
