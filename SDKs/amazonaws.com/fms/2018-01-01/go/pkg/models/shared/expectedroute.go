package shared

type ExpectedRoute struct {
	AllowedTargets      []string `json:"AllowedTargets"`
	ContributingSubnets []string `json:"ContributingSubnets"`
	IPV4Cidr            *string  `json:"IpV4Cidr"`
	IPV6Cidr            *string  `json:"IpV6Cidr"`
	PrefixListID        *string  `json:"PrefixListId"`
	RouteTableID        *string  `json:"RouteTableId"`
}
