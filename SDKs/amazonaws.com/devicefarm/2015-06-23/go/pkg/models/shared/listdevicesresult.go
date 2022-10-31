package shared



type ListDevicesResult struct {
    Devices []Device `json:"devices,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

