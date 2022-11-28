package shared

// NetworkInfo
// Describes the networking features of the instance type.
type NetworkInfo struct {
	DefaultNetworkCardIndex      *int64
	EfaInfo                      *EfaInfo
	EfaSupported                 *bool
	EnaSupport                   *EnaSupportEnum
	EncryptionInTransitSupported *bool
	Ipv4AddressesPerInterface    *int64
	Ipv6AddressesPerInterface    *int64
	Ipv6Supported                *bool
	MaximumNetworkCards          *int64
	MaximumNetworkInterfaces     *int64
	NetworkCards                 []NetworkCardInfo
	NetworkPerformance           *string
}
