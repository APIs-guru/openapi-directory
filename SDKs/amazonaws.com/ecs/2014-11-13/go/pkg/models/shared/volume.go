package shared

type Volume struct {
	DockerVolumeConfiguration               *DockerVolumeConfiguration               `json:"dockerVolumeConfiguration"`
	EfsVolumeConfiguration                  *EfsVolumeConfiguration                  `json:"efsVolumeConfiguration"`
	FsxWindowsFileServerVolumeConfiguration *FSxWindowsFileServerVolumeConfiguration `json:"fsxWindowsFileServerVolumeConfiguration"`
	Host                                    *HostVolumeProperties                    `json:"host"`
	Name                                    *string                                  `json:"name"`
}
