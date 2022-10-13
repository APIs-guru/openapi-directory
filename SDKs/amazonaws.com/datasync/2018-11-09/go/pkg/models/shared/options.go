package shared

type Options struct {
	Atime                       *AtimeEnum                          `json:"Atime"`
	BytesPerSecond              *int64                              `json:"BytesPerSecond"`
	Gid                         *GidEnum                            `json:"Gid"`
	LogLevel                    *LogLevelEnum                       `json:"LogLevel"`
	Mtime                       *MtimeEnum                          `json:"Mtime"`
	OverwriteMode               *OverwriteModeEnum                  `json:"OverwriteMode"`
	PosixPermissions            *PosixPermissionsEnum               `json:"PosixPermissions"`
	PreserveDeletedFiles        *PreserveDeletedFilesEnum           `json:"PreserveDeletedFiles"`
	PreserveDevices             *PreserveDevicesEnum                `json:"PreserveDevices"`
	SecurityDescriptorCopyFlags *SmbSecurityDescriptorCopyFlagsEnum `json:"SecurityDescriptorCopyFlags"`
	TaskQueueing                *TaskQueueingEnum                   `json:"TaskQueueing"`
	TransferMode                *TransferModeEnum                   `json:"TransferMode"`
	UID                         *UIDEnum                            `json:"Uid"`
	VerifyMode                  *VerifyModeEnum                     `json:"VerifyMode"`
}
