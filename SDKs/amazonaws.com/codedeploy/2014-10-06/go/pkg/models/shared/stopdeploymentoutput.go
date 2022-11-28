package shared

// StopDeploymentOutput
//
//	Represents the output of a <code>StopDeployment</code> operation.
type StopDeploymentOutput struct {
	Status        *StopStatusEnum `json:"status,omitempty"`
	StatusMessage *string         `json:"statusMessage,omitempty"`
}
