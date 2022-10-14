package shared

type CreateTrustRequest struct {
	ConditionalForwarderIPAddrs []string           `json:"ConditionalForwarderIpAddrs,omitempty"`
	DirectoryID                 string             `json:"DirectoryId"`
	RemoteDomainName            string             `json:"RemoteDomainName"`
	SelectiveAuth               *SelectiveAuthEnum `json:"SelectiveAuth,omitempty"`
	TrustDirection              TrustDirectionEnum `json:"TrustDirection"`
	TrustPassword               string             `json:"TrustPassword"`
	TrustType                   *TrustTypeEnum     `json:"TrustType,omitempty"`
}
