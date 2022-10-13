package shared

type ExistConditionEnum string

const (
	ExistConditionEnumMustExist ExistConditionEnum = "MUST_EXIST"
	ExistConditionEnumNotExist  ExistConditionEnum = "NOT_EXIST"
	ExistConditionEnumNone      ExistConditionEnum = "NONE"
)
