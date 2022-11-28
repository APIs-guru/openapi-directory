package shared

// ImagePermissions
// Describes the permissions for an image.
type ImagePermissions struct {
	AllowFleet        *bool `json:"allowFleet,omitempty"`
	AllowImageBuilder *bool `json:"allowImageBuilder,omitempty"`
}
