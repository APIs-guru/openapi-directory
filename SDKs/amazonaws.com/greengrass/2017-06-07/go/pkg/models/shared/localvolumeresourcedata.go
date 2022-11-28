package shared

// LocalVolumeResourceData
// Attributes that define a local volume resource.
type LocalVolumeResourceData struct {
	DestinationPath   *string            `json:"DestinationPath,omitempty"`
	GroupOwnerSetting *GroupOwnerSetting `json:"GroupOwnerSetting,omitempty"`
	SourcePath        *string            `json:"SourcePath,omitempty"`
}
