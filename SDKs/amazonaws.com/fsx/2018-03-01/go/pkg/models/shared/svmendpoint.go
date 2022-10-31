package shared

type SvmEndpoint struct {
	DNSName     *string  `json:"DNSName,omitempty"`
	IPAddresses []string `json:"IpAddresses,omitempty"`
}
