package shared

type CreateBackendAuthResourceConfig struct {
	AuthResources       AuthResourcesEnum                    `json:"AuthResources"`
	IdentityPoolConfigs *CreateBackendAuthIdentityPoolConfig `json:"IdentityPoolConfigs"`
	Service             ServiceEnum                          `json:"Service"`
	UserPoolConfigs     CreateBackendAuthUserPoolConfig      `json:"UserPoolConfigs"`
}
