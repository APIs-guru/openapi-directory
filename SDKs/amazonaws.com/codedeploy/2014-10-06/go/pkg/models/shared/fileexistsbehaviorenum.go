package shared

type FileExistsBehaviorEnum string

const (
	FileExistsBehaviorEnumDisallow  FileExistsBehaviorEnum = "DISALLOW"
	FileExistsBehaviorEnumOverwrite FileExistsBehaviorEnum = "OVERWRITE"
	FileExistsBehaviorEnumRetain    FileExistsBehaviorEnum = "RETAIN"
)
