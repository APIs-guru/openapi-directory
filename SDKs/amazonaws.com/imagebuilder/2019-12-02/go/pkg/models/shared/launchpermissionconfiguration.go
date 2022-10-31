package shared

type LaunchPermissionConfiguration struct {
	UserGroups []string `json:"userGroups,omitempty"`
	UserIds    []string `json:"userIds,omitempty"`
}
