package shared

type AdminListDevicesResponse struct {
	Devices         []DeviceType `json:"Devices"`
	PaginationToken *string      `json:"PaginationToken"`
}
