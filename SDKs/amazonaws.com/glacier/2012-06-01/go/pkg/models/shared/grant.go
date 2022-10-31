package shared



type Grant struct {
    Grantee *Grantee `json:"Grantee,omitempty"`
    Permission *PermissionEnum `json:"Permission,omitempty"`
    
}

