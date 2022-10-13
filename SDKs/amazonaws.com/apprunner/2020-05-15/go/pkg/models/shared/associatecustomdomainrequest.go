package shared

type AssociateCustomDomainRequest struct {
	DomainName         string `json:"DomainName"`
	EnableWwwSubdomain *bool  `json:"EnableWWWSubdomain"`
	ServiceArn         string `json:"ServiceArn"`
}
