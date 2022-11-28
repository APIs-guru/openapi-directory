package shared

// LocalDeviceResourceData
// Attributes that define a local device resource.
type LocalDeviceResourceData struct {
	GroupOwnerSetting *GroupOwnerSetting `json:"GroupOwnerSetting,omitempty"`
	SourcePath        *string            `json:"SourcePath,omitempty"`
}
