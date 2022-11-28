package shared

// DeviceSummary
// Includes information about the device.
type DeviceSummary struct {
	DeviceArn    string           `json:"deviceArn"`
	DeviceName   string           `json:"deviceName"`
	DeviceStatus DeviceStatusEnum `json:"deviceStatus"`
	DeviceType   DeviceTypeEnum   `json:"deviceType"`
	ProviderName string           `json:"providerName"`
}
