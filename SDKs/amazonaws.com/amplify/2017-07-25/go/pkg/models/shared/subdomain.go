package shared

type SubDomain struct {
	DNSRecord        string           `json:"dnsRecord"`
	SubDomainSetting SubDomainSetting `json:"subDomainSetting"`
	Verified         bool             `json:"verified"`
}
