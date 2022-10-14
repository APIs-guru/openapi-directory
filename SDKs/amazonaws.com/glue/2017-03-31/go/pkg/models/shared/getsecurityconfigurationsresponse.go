package shared

type GetSecurityConfigurationsResponse struct {
	NextToken              *string                 `json:"NextToken,omitempty"`
	SecurityConfigurations []SecurityConfiguration `json:"SecurityConfigurations,omitempty"`
}
