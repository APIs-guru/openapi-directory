package shared



type AssociateCustomDomainResponse struct {
    CustomDomain CustomDomain `json:"CustomDomain"`
    DNSTarget string `json:"DNSTarget"`
    ServiceArn string `json:"ServiceArn"`
    
}

