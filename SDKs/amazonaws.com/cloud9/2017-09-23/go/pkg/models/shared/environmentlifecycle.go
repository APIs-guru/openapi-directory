package shared

type EnvironmentLifecycle struct {
	FailureResource *string                         `json:"failureResource"`
	Reason          *string                         `json:"reason"`
	Status          *EnvironmentLifecycleStatusEnum `json:"status"`
}
