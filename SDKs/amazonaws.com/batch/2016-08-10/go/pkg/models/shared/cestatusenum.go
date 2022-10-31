package shared

type CeStatusEnum string

const (
	CeStatusEnumCreating CeStatusEnum = "CREATING"
	CeStatusEnumUpdating CeStatusEnum = "UPDATING"
	CeStatusEnumDeleting CeStatusEnum = "DELETING"
	CeStatusEnumDeleted  CeStatusEnum = "DELETED"
	CeStatusEnumValid    CeStatusEnum = "VALID"
	CeStatusEnumInvalid  CeStatusEnum = "INVALID"
)
