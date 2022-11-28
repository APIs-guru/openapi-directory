package shared

// UserSetting
// Describes an action and whether the action is enabled or disabled for users during their streaming sessions.
type UserSetting struct {
	Action     ActionEnum     `json:"Action"`
	Permission PermissionEnum `json:"Permission"`
}
