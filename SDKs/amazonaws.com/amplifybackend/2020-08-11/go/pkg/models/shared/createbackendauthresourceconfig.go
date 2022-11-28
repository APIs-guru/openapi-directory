package shared

// CreateBackendAuthResourceConfig
// Defines the resource configuration when creating an auth resource in your Amplify project.
type CreateBackendAuthResourceConfig struct {
	AuthResources       AuthResourcesEnum                    `json:"AuthResources"`
	IdentityPoolConfigs *CreateBackendAuthIdentityPoolConfig `json:"IdentityPoolConfigs,omitempty"`
	Service             ServiceEnum                          `json:"Service"`
	UserPoolConfigs     CreateBackendAuthUserPoolConfig      `json:"UserPoolConfigs"`
}
