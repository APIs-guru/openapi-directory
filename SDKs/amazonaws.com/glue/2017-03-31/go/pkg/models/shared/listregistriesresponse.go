package shared

type ListRegistriesResponse struct {
	NextToken  *string            `json:"NextToken,omitempty"`
	Registries []RegistryListItem `json:"Registries,omitempty"`
}
