package shared

// RollbackInfo
// Information about a deployment rollback.
type RollbackInfo struct {
	RollbackDeploymentID           *string `json:"rollbackDeploymentId,omitempty"`
	RollbackMessage                *string `json:"rollbackMessage,omitempty"`
	RollbackTriggeringDeploymentID *string `json:"rollbackTriggeringDeploymentId,omitempty"`
}
