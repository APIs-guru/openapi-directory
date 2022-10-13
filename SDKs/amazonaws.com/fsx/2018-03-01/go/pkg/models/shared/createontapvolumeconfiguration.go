package shared

type CreateOntapVolumeConfiguration struct {
	JunctionPath             string             `json:"JunctionPath"`
	SecurityStyle            *SecurityStyleEnum `json:"SecurityStyle"`
	SizeInMegabytes          int64              `json:"SizeInMegabytes"`
	StorageEfficiencyEnabled bool               `json:"StorageEfficiencyEnabled"`
	StorageVirtualMachineID  string             `json:"StorageVirtualMachineId"`
	TieringPolicy            *TieringPolicy     `json:"TieringPolicy"`
}
