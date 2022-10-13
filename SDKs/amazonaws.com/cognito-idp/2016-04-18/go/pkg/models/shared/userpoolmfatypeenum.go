package shared

type UserPoolMfaTypeEnum string

const (
	UserPoolMfaTypeEnumOff      UserPoolMfaTypeEnum = "OFF"
	UserPoolMfaTypeEnumOn       UserPoolMfaTypeEnum = "ON"
	UserPoolMfaTypeEnumOptional UserPoolMfaTypeEnum = "OPTIONAL"
)
