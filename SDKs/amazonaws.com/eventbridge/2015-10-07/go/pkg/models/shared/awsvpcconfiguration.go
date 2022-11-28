package shared

// AwsVpcConfiguration
// This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.
type AwsVpcConfiguration struct {
	AssignPublicIP *AssignPublicIPEnum `json:"AssignPublicIp,omitempty"`
	SecurityGroups []string            `json:"SecurityGroups,omitempty"`
	Subnets        []string            `json:"Subnets"`
}
