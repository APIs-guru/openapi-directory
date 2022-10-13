package shared

type ListRegistriesResponse struct {
	NextToken  *string            `json:"NextToken"`
	Registries []RegistryListItem `json:"Registries"`
}
