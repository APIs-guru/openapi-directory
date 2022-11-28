package shared

// CreateOntapVolumeConfiguration
// Specifies the configuration of the ONTAP volume that you are creating.
type CreateOntapVolumeConfiguration struct {
	JunctionPath             string             `json:"JunctionPath"`
	SecurityStyle            *SecurityStyleEnum `json:"SecurityStyle,omitempty"`
	SizeInMegabytes          int64              `json:"SizeInMegabytes"`
	StorageEfficiencyEnabled bool               `json:"StorageEfficiencyEnabled"`
	StorageVirtualMachineID  string             `json:"StorageVirtualMachineId"`
	TieringPolicy            *TieringPolicy     `json:"TieringPolicy,omitempty"`
}
