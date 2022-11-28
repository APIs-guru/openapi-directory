package shared

// CreateVolumePermission
// Describes the user or group to be added or removed from the list of create volume permissions for a volume.
type CreateVolumePermission struct {
	Group  *PermissionGroupEnum
	UserID *string
}
