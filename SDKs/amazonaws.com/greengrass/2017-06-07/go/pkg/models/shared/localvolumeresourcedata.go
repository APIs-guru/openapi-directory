package shared

type LocalVolumeResourceData struct {
	DestinationPath   *string            `json:"DestinationPath"`
	GroupOwnerSetting *GroupOwnerSetting `json:"GroupOwnerSetting"`
	SourcePath        *string            `json:"SourcePath"`
}
