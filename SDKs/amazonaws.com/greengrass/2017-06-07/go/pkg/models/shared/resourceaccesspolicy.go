package shared



type ResourceAccessPolicy struct {
    Permission *PermissionEnum `json:"Permission,omitempty"`
    ResourceID string `json:"ResourceId"`
    
}

