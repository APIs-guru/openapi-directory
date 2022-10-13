package shared

type DisassociateCustomDomainRequest struct {
	DomainName string `json:"DomainName"`
	ServiceArn string `json:"ServiceArn"`
}
