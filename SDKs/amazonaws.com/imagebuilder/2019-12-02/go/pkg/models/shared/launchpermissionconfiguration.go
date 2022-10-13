package shared

type LaunchPermissionConfiguration struct {
	UserGroups []string `json:"userGroups"`
	UserIds    []string `json:"userIds"`
}
