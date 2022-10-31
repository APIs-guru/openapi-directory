package shared



type DomainName struct {
    APIMappingSelectionExpression *string `json:"ApiMappingSelectionExpression,omitempty"`
    DomainName string `json:"DomainName"`
    DomainNameConfigurations []DomainNameConfiguration `json:"DomainNameConfigurations,omitempty"`
    MutualTLSAuthentication *MutualTLSAuthentication `json:"MutualTlsAuthentication,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

