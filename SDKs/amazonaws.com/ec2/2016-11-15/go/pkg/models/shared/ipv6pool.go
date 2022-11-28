package shared

// Ipv6Pool
// Describes an IPv6 address pool.
type Ipv6Pool struct {
	Description    *string
	PoolCidrBlocks []PoolCidrBlock
	PoolID         *string
	Tags           []Tag
}
