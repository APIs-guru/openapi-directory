package shared

type VolumeFrom struct {
	ReadOnly        *bool   `json:"readOnly"`
	SourceContainer *string `json:"sourceContainer"`
}
