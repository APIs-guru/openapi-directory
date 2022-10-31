package shared



type GetDeviceResponse struct {
    DeviceArn string `json:"deviceArn"`
    DeviceCapabilities string `json:"deviceCapabilities"`
    DeviceName string `json:"deviceName"`
    DeviceStatus DeviceStatusEnum `json:"deviceStatus"`
    DeviceType DeviceTypeEnum `json:"deviceType"`
    ProviderName string `json:"providerName"`
    
}

