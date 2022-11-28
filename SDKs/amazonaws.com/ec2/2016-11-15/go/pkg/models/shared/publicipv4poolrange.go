package shared

// PublicIpv4PoolRange
// Describes an address range of an IPv4 address pool.
type PublicIpv4PoolRange struct {
	AddressCount          *int64
	AvailableAddressCount *int64
	FirstAddress          *string
	LastAddress           *string
}
