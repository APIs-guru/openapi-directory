package shared

// ListVirtualMfaDevicesResponse
// Contains the response to a successful <a>ListVirtualMFADevices</a> request.
type ListVirtualMfaDevicesResponse struct {
	IsTruncated       *bool
	Marker            *string
	VirtualMfaDevices []VirtualMfaDevice
}
