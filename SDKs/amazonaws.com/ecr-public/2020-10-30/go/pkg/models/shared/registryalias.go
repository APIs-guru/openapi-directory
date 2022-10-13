package shared

type RegistryAlias struct {
	DefaultRegistryAlias bool                    `json:"defaultRegistryAlias"`
	Name                 string                  `json:"name"`
	PrimaryRegistryAlias bool                    `json:"primaryRegistryAlias"`
	Status               RegistryAliasStatusEnum `json:"status"`
}
