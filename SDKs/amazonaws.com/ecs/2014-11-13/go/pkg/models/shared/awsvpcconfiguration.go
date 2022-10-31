package shared



type AwsVpcConfiguration struct {
    AssignPublicIP *AssignPublicIPEnum `json:"assignPublicIp,omitempty"`
    SecurityGroups []string `json:"securityGroups,omitempty"`
    Subnets []string `json:"subnets"`
    
}

