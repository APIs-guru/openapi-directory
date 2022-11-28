package shared

// Grant
// Contains information about a grant.
type Grant struct {
	Grantee    *Grantee        `json:"Grantee,omitempty"`
	Permission *PermissionEnum `json:"Permission,omitempty"`
}
