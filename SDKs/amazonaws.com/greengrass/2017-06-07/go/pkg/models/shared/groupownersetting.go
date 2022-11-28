package shared

// GroupOwnerSetting
// Group owner related settings for local resources.
type GroupOwnerSetting struct {
	AutoAddGroupOwner *bool   `json:"AutoAddGroupOwner,omitempty"`
	GroupOwner        *string `json:"GroupOwner,omitempty"`
}
