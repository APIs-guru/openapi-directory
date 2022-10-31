package shared

type PermissionEnum string

const (
	PermissionEnumFullControl PermissionEnum = "FULL_CONTROL"
	PermissionEnumWrite       PermissionEnum = "WRITE"
	PermissionEnumWriteAcp    PermissionEnum = "WRITE_ACP"
	PermissionEnumRead        PermissionEnum = "READ"
	PermissionEnumReadAcp     PermissionEnum = "READ_ACP"
)
