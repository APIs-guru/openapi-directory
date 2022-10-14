package shared

type PutLifecycleEventHookExecutionStatusInput struct {
	DeploymentID                  *string                   `json:"deploymentId,omitempty"`
	LifecycleEventHookExecutionID *string                   `json:"lifecycleEventHookExecutionId,omitempty"`
	Status                        *LifecycleEventStatusEnum `json:"status,omitempty"`
}
