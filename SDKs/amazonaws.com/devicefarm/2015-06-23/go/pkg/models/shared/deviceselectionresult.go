package shared



type DeviceSelectionResult struct {
    Filters []DeviceFilter `json:"filters,omitempty"`
    MatchedDevicesCount *int64 `json:"matchedDevicesCount,omitempty"`
    MaxDevices *int64 `json:"maxDevices,omitempty"`
    
}

