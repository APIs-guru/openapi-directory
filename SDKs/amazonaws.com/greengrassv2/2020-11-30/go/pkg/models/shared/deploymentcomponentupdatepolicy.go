package shared

type DeploymentComponentUpdatePolicy struct {
	Action           *DeploymentComponentUpdatePolicyActionEnum `json:"action,omitempty"`
	TimeoutInSeconds *int64                                     `json:"timeoutInSeconds,omitempty"`
}
