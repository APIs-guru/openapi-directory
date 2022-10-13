package shared

type OntapVolumeConfiguration struct {
	FlexCacheEndpointType     *FlexCacheEndpointTypeEnum `json:"FlexCacheEndpointType"`
	JunctionPath              *string                    `json:"JunctionPath"`
	OntapVolumeType           *OntapVolumeTypeEnum       `json:"OntapVolumeType"`
	SecurityStyle             *SecurityStyleEnum         `json:"SecurityStyle"`
	SizeInMegabytes           *int64                     `json:"SizeInMegabytes"`
	StorageEfficiencyEnabled  *bool                      `json:"StorageEfficiencyEnabled"`
	StorageVirtualMachineID   *string                    `json:"StorageVirtualMachineId"`
	StorageVirtualMachineRoot *bool                      `json:"StorageVirtualMachineRoot"`
	TieringPolicy             *TieringPolicy             `json:"TieringPolicy"`
	UUID                      *string                    `json:"UUID"`
}
