package shared

// RegisterOnPremisesInstanceInput
// Represents the input of the register on-premises instance operation.
type RegisterOnPremisesInstanceInput struct {
	IamSessionArn *string `json:"iamSessionArn,omitempty"`
	IamUserArn    *string `json:"iamUserArn,omitempty"`
	InstanceName  string  `json:"instanceName"`
}
