package shared

type AwsVpcConfiguration struct {
	AssignPublicIP *AssignPublicIPEnum `json:"assignPublicIp"`
	SecurityGroups []string            `json:"securityGroups"`
	Subnets        []string            `json:"subnets"`
}
