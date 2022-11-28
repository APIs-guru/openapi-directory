package shared

// UpdateDevicePoolRequest
// Represents a request to the update device pool operation.
type UpdateDevicePoolRequest struct {
	Arn             string  `json:"arn"`
	ClearMaxDevices *bool   `json:"clearMaxDevices,omitempty"`
	Description     *string `json:"description,omitempty"`
	MaxDevices      *int64  `json:"maxDevices,omitempty"`
	Name            *string `json:"name,omitempty"`
	Rules           []Rule  `json:"rules,omitempty"`
}
