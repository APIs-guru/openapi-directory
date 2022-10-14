package shared

type IPSet struct {
	IPAddresses []string `json:"IpAddresses,omitempty"`
	IPFamily    *string  `json:"IpFamily,omitempty"`
}
