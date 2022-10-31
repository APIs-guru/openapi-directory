package shared



type UpdateDomainNameResponse struct {
    APIMappingSelectionExpression *string `json:"ApiMappingSelectionExpression,omitempty"`
    DomainName *string `json:"DomainName,omitempty"`
    DomainNameConfigurations []DomainNameConfiguration `json:"DomainNameConfigurations,omitempty"`
    MutualTLSAuthentication *MutualTLSAuthentication `json:"MutualTlsAuthentication,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

