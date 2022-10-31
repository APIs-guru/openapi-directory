package shared



type SecurityDetails struct {
    RoleArn string `json:"roleArn"`
    SecurityGroupIds []string `json:"securityGroupIds"`
    SubnetIds []string `json:"subnetIds"`
    
}

