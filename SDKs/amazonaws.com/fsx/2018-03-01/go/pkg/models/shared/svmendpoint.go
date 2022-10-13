package shared

type SvmEndpoint struct {
	DNSName     *string  `json:"DNSName"`
	IPAddresses []string `json:"IpAddresses"`
}
