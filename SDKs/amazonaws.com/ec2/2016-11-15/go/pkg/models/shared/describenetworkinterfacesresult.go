package shared

// DescribeNetworkInterfacesResult
// Contains the output of DescribeNetworkInterfaces.
type DescribeNetworkInterfacesResult struct {
	NetworkInterfaces []NetworkInterface
	NextToken         *string
}
