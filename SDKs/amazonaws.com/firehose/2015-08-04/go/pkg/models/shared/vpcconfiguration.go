package shared



type VpcConfiguration struct {
    RoleArn string `json:"RoleARN"`
    SecurityGroupIds []string `json:"SecurityGroupIds"`
    SubnetIds []string `json:"SubnetIds"`
    
}

