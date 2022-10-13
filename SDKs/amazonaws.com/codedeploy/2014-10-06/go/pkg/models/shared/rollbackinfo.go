package shared

type RollbackInfo struct {
	RollbackDeploymentID           *string `json:"rollbackDeploymentId"`
	RollbackMessage                *string `json:"rollbackMessage"`
	RollbackTriggeringDeploymentID *string `json:"rollbackTriggeringDeploymentId"`
}
