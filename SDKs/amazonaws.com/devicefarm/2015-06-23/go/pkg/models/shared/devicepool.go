package shared

type DevicePool struct {
	Arn         *string             `json:"arn"`
	Description *string             `json:"description"`
	MaxDevices  *int64              `json:"maxDevices"`
	Name        *string             `json:"name"`
	Rules       []Rule              `json:"rules"`
	Type        *DevicePoolTypeEnum `json:"type"`
}
