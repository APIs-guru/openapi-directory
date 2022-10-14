package shared

type OntapVolumeConfiguration struct {
	FlexCacheEndpointType     *FlexCacheEndpointTypeEnum `json:"FlexCacheEndpointType,omitempty"`
	JunctionPath              *string                    `json:"JunctionPath,omitempty"`
	OntapVolumeType           *OntapVolumeTypeEnum       `json:"OntapVolumeType,omitempty"`
	SecurityStyle             *SecurityStyleEnum         `json:"SecurityStyle,omitempty"`
	SizeInMegabytes           *int64                     `json:"SizeInMegabytes,omitempty"`
	StorageEfficiencyEnabled  *bool                      `json:"StorageEfficiencyEnabled,omitempty"`
	StorageVirtualMachineID   *string                    `json:"StorageVirtualMachineId,omitempty"`
	StorageVirtualMachineRoot *bool                      `json:"StorageVirtualMachineRoot,omitempty"`
	TieringPolicy             *TieringPolicy             `json:"TieringPolicy,omitempty"`
	UUID                      *string                    `json:"UUID,omitempty"`
}
