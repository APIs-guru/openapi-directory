package shared

// NetworkInterfacePermissionState
// Describes the state of a network interface permission.
type NetworkInterfacePermissionState struct {
	State         *NetworkInterfacePermissionStateCodeEnum
	StatusMessage *string
}
