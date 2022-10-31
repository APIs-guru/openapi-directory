package shared

type Registry struct {
	Aliases     []RegistryAlias `json:"aliases"`
	RegistryArn string          `json:"registryArn"`
	RegistryID  string          `json:"registryId"`
	RegistryURI string          `json:"registryUri"`
	Verified    bool            `json:"verified"`
}
