package shared

type Volume struct {
	EfsVolumeConfiguration *EfsVolumeConfiguration `json:"efsVolumeConfiguration"`
	Host                   *Host                   `json:"host"`
	Name                   *string                 `json:"name"`
}
