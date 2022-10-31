package shared

type EventFilterTypeEnum string

const (
	EventFilterTypeEnumSignIn         EventFilterTypeEnum = "SIGN_IN"
	EventFilterTypeEnumPasswordChange EventFilterTypeEnum = "PASSWORD_CHANGE"
	EventFilterTypeEnumSignUp         EventFilterTypeEnum = "SIGN_UP"
)
