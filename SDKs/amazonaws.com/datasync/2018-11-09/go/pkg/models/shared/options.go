package shared

// Options
// <p>Represents the options that are available to control the behavior of a <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
type Options struct {
	Atime                       *AtimeEnum                          `json:"Atime,omitempty"`
	BytesPerSecond              *int64                              `json:"BytesPerSecond,omitempty"`
	Gid                         *GidEnum                            `json:"Gid,omitempty"`
	LogLevel                    *LogLevelEnum                       `json:"LogLevel,omitempty"`
	Mtime                       *MtimeEnum                          `json:"Mtime,omitempty"`
	OverwriteMode               *OverwriteModeEnum                  `json:"OverwriteMode,omitempty"`
	PosixPermissions            *PosixPermissionsEnum               `json:"PosixPermissions,omitempty"`
	PreserveDeletedFiles        *PreserveDeletedFilesEnum           `json:"PreserveDeletedFiles,omitempty"`
	PreserveDevices             *PreserveDevicesEnum                `json:"PreserveDevices,omitempty"`
	SecurityDescriptorCopyFlags *SmbSecurityDescriptorCopyFlagsEnum `json:"SecurityDescriptorCopyFlags,omitempty"`
	TaskQueueing                *TaskQueueingEnum                   `json:"TaskQueueing,omitempty"`
	TransferMode                *TransferModeEnum                   `json:"TransferMode,omitempty"`
	UID                         *UIDEnum                            `json:"Uid,omitempty"`
	VerifyMode                  *VerifyModeEnum                     `json:"VerifyMode,omitempty"`
}
