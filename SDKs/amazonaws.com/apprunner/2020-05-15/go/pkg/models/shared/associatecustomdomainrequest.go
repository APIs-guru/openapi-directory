package shared

type AssociateCustomDomainRequest struct {
	DomainName         string `json:"DomainName"`
	EnableWwwSubdomain *bool  `json:"EnableWWWSubdomain,omitempty"`
	ServiceArn         string `json:"ServiceArn"`
}
