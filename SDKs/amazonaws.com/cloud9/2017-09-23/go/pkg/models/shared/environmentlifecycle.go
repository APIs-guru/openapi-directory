package shared

// EnvironmentLifecycle
// Information about the current creation or deletion lifecycle state of an Cloud9 development environment.
type EnvironmentLifecycle struct {
	FailureResource *string                         `json:"failureResource,omitempty"`
	Reason          *string                         `json:"reason,omitempty"`
	Status          *EnvironmentLifecycleStatusEnum `json:"status,omitempty"`
}
