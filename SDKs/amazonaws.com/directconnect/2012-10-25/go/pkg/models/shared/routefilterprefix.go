package shared

// RouteFilterPrefix
// Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface.
type RouteFilterPrefix struct {
	Cidr *string `json:"cidr,omitempty"`
}
