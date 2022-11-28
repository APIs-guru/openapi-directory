package shared

// ResourceAccessPolicy
// A policy used by the function to access a resource.
type ResourceAccessPolicy struct {
	Permission *PermissionEnum `json:"Permission,omitempty"`
	ResourceID string          `json:"ResourceId"`
}
