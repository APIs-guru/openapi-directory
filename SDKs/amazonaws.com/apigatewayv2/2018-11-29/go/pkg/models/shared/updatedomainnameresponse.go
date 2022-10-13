package shared

type UpdateDomainNameResponse struct {
	APIMappingSelectionExpression *string                   `json:"ApiMappingSelectionExpression"`
	DomainName                    *string                   `json:"DomainName"`
	DomainNameConfigurations      []DomainNameConfiguration `json:"DomainNameConfigurations"`
	MutualTLSAuthentication       *MutualTLSAuthentication  `json:"MutualTlsAuthentication"`
	Tags                          map[string]string         `json:"Tags"`
}
