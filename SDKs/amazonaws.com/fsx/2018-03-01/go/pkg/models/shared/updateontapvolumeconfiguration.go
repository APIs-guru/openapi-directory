package shared

// UpdateOntapVolumeConfiguration
// Used to specify changes to the ONTAP configuration for the volume you are updating.
type UpdateOntapVolumeConfiguration struct {
	JunctionPath             *string            `json:"JunctionPath,omitempty"`
	SecurityStyle            *SecurityStyleEnum `json:"SecurityStyle,omitempty"`
	SizeInMegabytes          *int64             `json:"SizeInMegabytes,omitempty"`
	StorageEfficiencyEnabled *bool              `json:"StorageEfficiencyEnabled,omitempty"`
	TieringPolicy            *TieringPolicy     `json:"TieringPolicy,omitempty"`
}
