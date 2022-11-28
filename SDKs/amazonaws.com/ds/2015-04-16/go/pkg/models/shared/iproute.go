package shared

// IPRoute
// IP address block. This is often the address block of the DNS server used for your self-managed domain.
type IPRoute struct {
	CidrIP      *string `json:"CidrIp,omitempty"`
	Description *string `json:"Description,omitempty"`
}
