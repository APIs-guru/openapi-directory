package shared

type Volume struct {
	DockerVolumeConfiguration               *DockerVolumeConfiguration               `json:"dockerVolumeConfiguration,omitempty"`
	EfsVolumeConfiguration                  *EfsVolumeConfiguration                  `json:"efsVolumeConfiguration,omitempty"`
	FsxWindowsFileServerVolumeConfiguration *FSxWindowsFileServerVolumeConfiguration `json:"fsxWindowsFileServerVolumeConfiguration,omitempty"`
	Host                                    *HostVolumeProperties                    `json:"host,omitempty"`
	Name                                    *string                                  `json:"name,omitempty"`
}
