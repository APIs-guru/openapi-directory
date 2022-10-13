package shared

type ListVpceConfigurationsResult struct {
	NextToken          *string             `json:"nextToken"`
	VpceConfigurations []VpceConfiguration `json:"vpceConfigurations"`
}
