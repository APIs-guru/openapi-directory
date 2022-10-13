package shared

type RegisterOnPremisesInstanceInput struct {
	IamSessionArn *string `json:"iamSessionArn"`
	IamUserArn    *string `json:"iamUserArn"`
	InstanceName  string  `json:"instanceName"`
}
