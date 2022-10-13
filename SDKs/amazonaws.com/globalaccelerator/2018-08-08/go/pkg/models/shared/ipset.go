package shared

type IPSet struct {
	IPAddresses []string `json:"IpAddresses"`
	IPFamily    *string  `json:"IpFamily"`
}
