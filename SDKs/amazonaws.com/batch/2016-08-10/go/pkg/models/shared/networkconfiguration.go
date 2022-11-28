package shared

// NetworkConfiguration
// The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.
type NetworkConfiguration struct {
	AssignPublicIP *AssignPublicIPEnum `json:"assignPublicIp,omitempty"`
}
