package shared

type Grant struct {
	Grantee    *Grantee        `json:"Grantee"`
	Permission *PermissionEnum `json:"Permission"`
}
