package shared



type ListDevicesResponse struct {
    Devices []DeviceDescription `json:"Devices,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

