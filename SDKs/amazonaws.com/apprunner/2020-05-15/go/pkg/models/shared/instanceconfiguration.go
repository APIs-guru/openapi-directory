package shared

// InstanceConfiguration
// Describes the runtime configuration of an AWS App Runner service instance (scaling unit).
type InstanceConfiguration struct {
	CPU             *string `json:"Cpu,omitempty"`
	InstanceRoleArn *string `json:"InstanceRoleArn,omitempty"`
	Memory          *string `json:"Memory,omitempty"`
}
