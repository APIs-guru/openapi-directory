package shared

type InstanceConfiguration struct {
	CPU             *string `json:"Cpu,omitempty"`
	InstanceRoleArn *string `json:"InstanceRoleArn,omitempty"`
	Memory          *string `json:"Memory,omitempty"`
}
