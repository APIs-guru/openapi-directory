package shared

type OwnerDirectoryDescription struct {
	AccountID      *string                          `json:"AccountId"`
	DirectoryID    *string                          `json:"DirectoryId"`
	DNSIPAddrs     []string                         `json:"DnsIpAddrs"`
	RadiusSettings *RadiusSettings                  `json:"RadiusSettings"`
	RadiusStatus   *RadiusStatusEnum                `json:"RadiusStatus"`
	VpcSettings    *DirectoryVpcSettingsDescription `json:"VpcSettings"`
}
