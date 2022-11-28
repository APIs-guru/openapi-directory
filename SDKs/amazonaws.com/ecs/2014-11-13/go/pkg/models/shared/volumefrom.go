package shared

// VolumeFrom
// Details on a data volume from another container in the same task definition.
type VolumeFrom struct {
	ReadOnly        *bool   `json:"readOnly,omitempty"`
	SourceContainer *string `json:"sourceContainer,omitempty"`
}
