package shared

// Volume
// A data volume used in a job's container properties.
type Volume struct {
	EfsVolumeConfiguration *EfsVolumeConfiguration `json:"efsVolumeConfiguration,omitempty"`
	Host                   *Host                   `json:"host,omitempty"`
	Name                   *string                 `json:"name,omitempty"`
}
