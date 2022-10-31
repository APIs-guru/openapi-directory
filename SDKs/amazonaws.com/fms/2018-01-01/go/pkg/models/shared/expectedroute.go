package shared

type ExpectedRoute struct {
	AllowedTargets      []string `json:"AllowedTargets,omitempty"`
	ContributingSubnets []string `json:"ContributingSubnets,omitempty"`
	IPV4Cidr            *string  `json:"IpV4Cidr,omitempty"`
	IPV6Cidr            *string  `json:"IpV6Cidr,omitempty"`
	PrefixListID        *string  `json:"PrefixListId,omitempty"`
	RouteTableID        *string  `json:"RouteTableId,omitempty"`
}
