package shared

type InstanceConfiguration struct {
	CPU             *string `json:"Cpu"`
	InstanceRoleArn *string `json:"InstanceRoleArn"`
	Memory          *string `json:"Memory"`
}
