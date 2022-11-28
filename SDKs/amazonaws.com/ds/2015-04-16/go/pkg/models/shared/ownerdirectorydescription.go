package shared

// OwnerDirectoryDescription
// Describes the directory owner account details that have been shared to the directory consumer account.
type OwnerDirectoryDescription struct {
	AccountID      *string                          `json:"AccountId,omitempty"`
	DirectoryID    *string                          `json:"DirectoryId,omitempty"`
	DNSIPAddrs     []string                         `json:"DnsIpAddrs,omitempty"`
	RadiusSettings *RadiusSettings                  `json:"RadiusSettings,omitempty"`
	RadiusStatus   *RadiusStatusEnum                `json:"RadiusStatus,omitempty"`
	VpcSettings    *DirectoryVpcSettingsDescription `json:"VpcSettings,omitempty"`
}
