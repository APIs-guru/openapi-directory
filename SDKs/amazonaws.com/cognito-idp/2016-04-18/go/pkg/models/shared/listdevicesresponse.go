package shared

// ListDevicesResponse
// Represents the response to list devices.
type ListDevicesResponse struct {
	Devices         []DeviceType `json:"Devices,omitempty"`
	PaginationToken *string      `json:"PaginationToken,omitempty"`
}
