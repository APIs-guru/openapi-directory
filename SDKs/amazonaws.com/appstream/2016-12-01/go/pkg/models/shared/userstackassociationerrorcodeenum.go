package shared

type UserStackAssociationErrorCodeEnum string

const (
	UserStackAssociationErrorCodeEnumStackNotFound     UserStackAssociationErrorCodeEnum = "STACK_NOT_FOUND"
	UserStackAssociationErrorCodeEnumUserNameNotFound  UserStackAssociationErrorCodeEnum = "USER_NAME_NOT_FOUND"
	UserStackAssociationErrorCodeEnumDirectoryNotFound UserStackAssociationErrorCodeEnum = "DIRECTORY_NOT_FOUND"
	UserStackAssociationErrorCodeEnumInternalError     UserStackAssociationErrorCodeEnum = "INTERNAL_ERROR"
)
