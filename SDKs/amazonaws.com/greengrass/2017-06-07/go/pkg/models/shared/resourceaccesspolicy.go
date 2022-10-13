package shared

type ResourceAccessPolicy struct {
	Permission *PermissionEnum `json:"Permission"`
	ResourceID string          `json:"ResourceId"`
}
