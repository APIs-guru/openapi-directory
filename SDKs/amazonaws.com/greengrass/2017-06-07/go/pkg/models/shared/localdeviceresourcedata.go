package shared

type LocalDeviceResourceData struct {
	GroupOwnerSetting *GroupOwnerSetting `json:"GroupOwnerSetting,omitempty"`
	SourcePath        *string            `json:"SourcePath,omitempty"`
}
