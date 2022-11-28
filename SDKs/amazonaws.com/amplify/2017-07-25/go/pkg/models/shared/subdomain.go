package shared

// SubDomain
//
//	The subdomain for the domain association.
type SubDomain struct {
	DNSRecord        string           `json:"dnsRecord"`
	SubDomainSetting SubDomainSetting `json:"subDomainSetting"`
	Verified         bool             `json:"verified"`
}
