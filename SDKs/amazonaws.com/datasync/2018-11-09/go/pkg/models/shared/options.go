package shared



type Options struct {
    Atime *AtimeEnum `json:"Atime,omitempty"`
    BytesPerSecond *int64 `json:"BytesPerSecond,omitempty"`
    Gid *GidEnum `json:"Gid,omitempty"`
    LogLevel *LogLevelEnum `json:"LogLevel,omitempty"`
    Mtime *MtimeEnum `json:"Mtime,omitempty"`
    OverwriteMode *OverwriteModeEnum `json:"OverwriteMode,omitempty"`
    PosixPermissions *PosixPermissionsEnum `json:"PosixPermissions,omitempty"`
    PreserveDeletedFiles *PreserveDeletedFilesEnum `json:"PreserveDeletedFiles,omitempty"`
    PreserveDevices *PreserveDevicesEnum `json:"PreserveDevices,omitempty"`
    SecurityDescriptorCopyFlags *SmbSecurityDescriptorCopyFlagsEnum `json:"SecurityDescriptorCopyFlags,omitempty"`
    TaskQueueing *TaskQueueingEnum `json:"TaskQueueing,omitempty"`
    TransferMode *TransferModeEnum `json:"TransferMode,omitempty"`
    UID *UIDEnum `json:"Uid,omitempty"`
    VerifyMode *VerifyModeEnum `json:"VerifyMode,omitempty"`
    
}

