package shared



type ForgetDeviceRequest struct {
    AccessToken *string `json:"AccessToken,omitempty"`
    DeviceKey string `json:"DeviceKey"`
    
}

