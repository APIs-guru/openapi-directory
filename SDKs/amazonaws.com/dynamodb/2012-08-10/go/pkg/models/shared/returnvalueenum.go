package shared

type ReturnValueEnum string

const (
	ReturnValueEnumNone       ReturnValueEnum = "NONE"
	ReturnValueEnumAllOld     ReturnValueEnum = "ALL_OLD"
	ReturnValueEnumUpdatedOld ReturnValueEnum = "UPDATED_OLD"
	ReturnValueEnumAllNew     ReturnValueEnum = "ALL_NEW"
	ReturnValueEnumUpdatedNew ReturnValueEnum = "UPDATED_NEW"
)
