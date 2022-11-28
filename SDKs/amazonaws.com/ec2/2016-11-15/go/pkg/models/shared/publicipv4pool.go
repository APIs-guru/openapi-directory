package shared

// PublicIpv4Pool
// Describes an IPv4 address pool.
type PublicIpv4Pool struct {
	Description                *string
	NetworkBorderGroup         *string
	PoolAddressRanges          []PublicIpv4PoolRange
	PoolID                     *string
	Tags                       []Tag
	TotalAddressCount          *int64
	TotalAvailableAddressCount *int64
}
