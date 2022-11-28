package shared

// CreateDevicePoolRequest
// Represents a request to the create device pool operation.
type CreateDevicePoolRequest struct {
	Description *string `json:"description,omitempty"`
	MaxDevices  *int64  `json:"maxDevices,omitempty"`
	Name        string  `json:"name"`
	ProjectArn  string  `json:"projectArn"`
	Rules       []Rule  `json:"rules"`
}
