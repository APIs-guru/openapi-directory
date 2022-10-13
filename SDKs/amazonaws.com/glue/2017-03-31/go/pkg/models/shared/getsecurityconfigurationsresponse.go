package shared

type GetSecurityConfigurationsResponse struct {
	NextToken              *string                 `json:"NextToken"`
	SecurityConfigurations []SecurityConfiguration `json:"SecurityConfigurations"`
}
