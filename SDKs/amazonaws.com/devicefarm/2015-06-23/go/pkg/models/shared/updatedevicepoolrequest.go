package shared

type UpdateDevicePoolRequest struct {
	Arn             string  `json:"arn"`
	ClearMaxDevices *bool   `json:"clearMaxDevices"`
	Description     *string `json:"description"`
	MaxDevices      *int64  `json:"maxDevices"`
	Name            *string `json:"name"`
	Rules           []Rule  `json:"rules"`
}
