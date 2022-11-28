package shared

// DescribeNetworkInterfacePermissionsResult
// Contains the output for DescribeNetworkInterfacePermissions.
type DescribeNetworkInterfacePermissionsResult struct {
	NetworkInterfacePermissions []NetworkInterfacePermission
	NextToken                   *string
}
