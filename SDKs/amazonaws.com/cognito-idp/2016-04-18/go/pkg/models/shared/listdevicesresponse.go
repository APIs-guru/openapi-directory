package shared



type ListDevicesResponse struct {
    Devices []DeviceType `json:"Devices,omitempty"`
    PaginationToken *string `json:"PaginationToken,omitempty"`
    
}

