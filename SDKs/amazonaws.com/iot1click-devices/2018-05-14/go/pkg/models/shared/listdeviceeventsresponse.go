package shared



type ListDeviceEventsResponse struct {
    Events []DeviceEvent `json:"Events,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

