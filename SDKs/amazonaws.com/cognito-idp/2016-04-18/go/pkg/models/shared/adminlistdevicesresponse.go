package shared

// AdminListDevicesResponse
// Lists the device's response, as an administrator.
type AdminListDevicesResponse struct {
	Devices         []DeviceType `json:"Devices,omitempty"`
	PaginationToken *string      `json:"PaginationToken,omitempty"`
}
