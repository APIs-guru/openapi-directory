package shared

type CreateTrustRequest struct {
	ConditionalForwarderIPAddrs []string           `json:"ConditionalForwarderIpAddrs"`
	DirectoryID                 string             `json:"DirectoryId"`
	RemoteDomainName            string             `json:"RemoteDomainName"`
	SelectiveAuth               *SelectiveAuthEnum `json:"SelectiveAuth"`
	TrustDirection              TrustDirectionEnum `json:"TrustDirection"`
	TrustPassword               string             `json:"TrustPassword"`
	TrustType                   *TrustTypeEnum     `json:"TrustType"`
}
