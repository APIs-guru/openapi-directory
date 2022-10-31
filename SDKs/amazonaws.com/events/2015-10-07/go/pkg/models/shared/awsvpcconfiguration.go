package shared



type AwsVpcConfiguration struct {
    AssignPublicIP *AssignPublicIPEnum `json:"AssignPublicIp,omitempty"`
    SecurityGroups []string `json:"SecurityGroups,omitempty"`
    Subnets []string `json:"Subnets"`
    
}

