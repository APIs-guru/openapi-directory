package shared

type ListDevicesResponse struct {
	Devices   []DeviceDescription `json:"Devices"`
	NextToken *string             `json:"NextToken"`
}
