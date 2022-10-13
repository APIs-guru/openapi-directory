package shared

type AwsVpcConfiguration struct {
	AssignPublicIP *AssignPublicIPEnum `json:"AssignPublicIp"`
	SecurityGroups []string            `json:"SecurityGroups"`
	Subnets        []string            `json:"Subnets"`
}
