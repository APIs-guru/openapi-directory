package shared

type UpdateDevicePoolRequest struct {
	Arn             string  `json:"arn"`
	ClearMaxDevices *bool   `json:"clearMaxDevices,omitempty"`
	Description     *string `json:"description,omitempty"`
	MaxDevices      *int64  `json:"maxDevices,omitempty"`
	Name            *string `json:"name,omitempty"`
	Rules           []Rule  `json:"rules,omitempty"`
}
