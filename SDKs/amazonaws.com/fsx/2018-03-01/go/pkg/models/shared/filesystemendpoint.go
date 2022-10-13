package shared

type FileSystemEndpoint struct {
	DNSName     *string  `json:"DNSName"`
	IPAddresses []string `json:"IpAddresses"`
}
