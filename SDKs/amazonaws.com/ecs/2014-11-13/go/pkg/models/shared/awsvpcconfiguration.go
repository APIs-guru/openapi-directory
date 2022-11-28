package shared

// AwsVpcConfiguration
// An object representing the networking details for a task or service.
type AwsVpcConfiguration struct {
	AssignPublicIP *AssignPublicIPEnum `json:"assignPublicIp,omitempty"`
	SecurityGroups []string            `json:"securityGroups,omitempty"`
	Subnets        []string            `json:"subnets"`
}
