package shared

type PutLifecycleEventHookExecutionStatusInput struct {
	DeploymentID                  *string                   `json:"deploymentId"`
	LifecycleEventHookExecutionID *string                   `json:"lifecycleEventHookExecutionId"`
	Status                        *LifecycleEventStatusEnum `json:"status"`
}
