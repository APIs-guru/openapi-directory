package shared

type ImagePermissions struct {
	AllowFleet        *bool `json:"allowFleet"`
	AllowImageBuilder *bool `json:"allowImageBuilder"`
}
