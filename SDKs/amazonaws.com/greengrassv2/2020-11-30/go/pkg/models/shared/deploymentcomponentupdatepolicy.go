package shared

type DeploymentComponentUpdatePolicy struct {
	Action           *DeploymentComponentUpdatePolicyActionEnum `json:"action"`
	TimeoutInSeconds *int64                                     `json:"timeoutInSeconds"`
}
