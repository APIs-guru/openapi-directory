package shared

type StopDeploymentOutput struct {
	Status        *StopStatusEnum `json:"status"`
	StatusMessage *string         `json:"statusMessage"`
}
