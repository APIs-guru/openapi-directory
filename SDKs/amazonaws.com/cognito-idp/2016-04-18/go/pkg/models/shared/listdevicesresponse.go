package shared

type ListDevicesResponse struct {
	Devices         []DeviceType `json:"Devices"`
	PaginationToken *string      `json:"PaginationToken"`
}
