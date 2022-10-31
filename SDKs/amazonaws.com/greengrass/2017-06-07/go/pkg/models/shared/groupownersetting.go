package shared

type GroupOwnerSetting struct {
	AutoAddGroupOwner *bool   `json:"AutoAddGroupOwner,omitempty"`
	GroupOwner        *string `json:"GroupOwner,omitempty"`
}
