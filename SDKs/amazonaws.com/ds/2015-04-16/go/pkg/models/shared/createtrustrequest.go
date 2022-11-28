package shared

// CreateTrustRequest
// <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain.</p>
type CreateTrustRequest struct {
	ConditionalForwarderIPAddrs []string           `json:"ConditionalForwarderIpAddrs,omitempty"`
	DirectoryID                 string             `json:"DirectoryId"`
	RemoteDomainName            string             `json:"RemoteDomainName"`
	SelectiveAuth               *SelectiveAuthEnum `json:"SelectiveAuth,omitempty"`
	TrustDirection              TrustDirectionEnum `json:"TrustDirection"`
	TrustPassword               string             `json:"TrustPassword"`
	TrustType                   *TrustTypeEnum     `json:"TrustType,omitempty"`
}
