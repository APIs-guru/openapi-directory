package shared

type ACLPermissionEnum string

const (
	ACLPermissionEnumRead        ACLPermissionEnum = "READ"
	ACLPermissionEnumWrite       ACLPermissionEnum = "WRITE"
	ACLPermissionEnumReadAcp     ACLPermissionEnum = "READ_ACP"
	ACLPermissionEnumWriteAcp    ACLPermissionEnum = "WRITE_ACP"
	ACLPermissionEnumFullControl ACLPermissionEnum = "FULL_CONTROL"
)
