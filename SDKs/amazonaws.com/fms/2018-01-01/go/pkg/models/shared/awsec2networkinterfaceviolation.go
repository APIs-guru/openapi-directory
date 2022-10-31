package shared



type AwsEc2NetworkInterfaceViolation struct {
    ViolatingSecurityGroups []string `json:"ViolatingSecurityGroups,omitempty"`
    ViolationTarget *string `json:"ViolationTarget,omitempty"`
    
}

