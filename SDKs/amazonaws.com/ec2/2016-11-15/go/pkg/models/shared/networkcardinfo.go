package shared

// NetworkCardInfo
// Describes the network card support of the instance type.
type NetworkCardInfo struct {
	MaximumNetworkInterfaces *int64
	NetworkCardIndex         *int64
	NetworkPerformance       *string
}
