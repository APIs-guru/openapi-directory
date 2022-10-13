package shared

type UpdateOntapVolumeConfiguration struct {
	JunctionPath             *string            `json:"JunctionPath"`
	SecurityStyle            *SecurityStyleEnum `json:"SecurityStyle"`
	SizeInMegabytes          *int64             `json:"SizeInMegabytes"`
	StorageEfficiencyEnabled *bool              `json:"StorageEfficiencyEnabled"`
	TieringPolicy            *TieringPolicy     `json:"TieringPolicy"`
}
