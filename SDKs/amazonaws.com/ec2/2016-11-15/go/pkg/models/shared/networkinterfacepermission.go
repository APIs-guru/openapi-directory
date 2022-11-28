package shared

// NetworkInterfacePermission
// Describes a permission for a network interface.
type NetworkInterfacePermission struct {
	AwsAccountID                 *string
	AwsService                   *string
	NetworkInterfaceID           *string
	NetworkInterfacePermissionID *string
	Permission                   *InterfacePermissionTypeEnum
	PermissionState              *NetworkInterfacePermissionState
}
