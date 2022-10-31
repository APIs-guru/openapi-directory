package shared



type AdminListDevicesResponse struct {
    Devices []DeviceType `json:"Devices,omitempty"`
    PaginationToken *string `json:"PaginationToken,omitempty"`
    
}

