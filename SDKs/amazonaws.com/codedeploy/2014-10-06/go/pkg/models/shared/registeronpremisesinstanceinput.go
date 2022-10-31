package shared



type RegisterOnPremisesInstanceInput struct {
    IamSessionArn *string `json:"iamSessionArn,omitempty"`
    IamUserArn *string `json:"iamUserArn,omitempty"`
    InstanceName string `json:"instanceName"`
    
}

