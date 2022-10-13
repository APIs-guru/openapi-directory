package shared

type CreateDevicePoolRequest struct {
	Description *string `json:"description"`
	MaxDevices  *int64  `json:"maxDevices"`
	Name        string  `json:"name"`
	ProjectArn  string  `json:"projectArn"`
	Rules       []Rule  `json:"rules"`
}
