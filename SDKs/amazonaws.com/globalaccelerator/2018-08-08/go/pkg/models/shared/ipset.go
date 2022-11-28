package shared

// IPSet
// A complex type for the set of IP addresses for an accelerator.
type IPSet struct {
	IPAddresses []string `json:"IpAddresses,omitempty"`
	IPFamily    *string  `json:"IpFamily,omitempty"`
}
