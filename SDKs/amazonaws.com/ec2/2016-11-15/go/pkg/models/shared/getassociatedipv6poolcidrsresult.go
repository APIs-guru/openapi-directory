package shared

type GetAssociatedIpv6PoolCidrsResult struct {
	Ipv6CidrAssociations []Ipv6CidrAssociation
	NextToken            *string
}
