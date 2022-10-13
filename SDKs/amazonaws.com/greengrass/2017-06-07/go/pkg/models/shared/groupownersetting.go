package shared

type GroupOwnerSetting struct {
	AutoAddGroupOwner *bool   `json:"AutoAddGroupOwner"`
	GroupOwner        *string `json:"GroupOwner"`
}
