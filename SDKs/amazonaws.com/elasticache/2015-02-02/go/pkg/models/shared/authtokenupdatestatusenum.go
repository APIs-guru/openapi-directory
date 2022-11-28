package shared

type AuthTokenUpdateStatusEnum string

const (
	AuthTokenUpdateStatusEnumSetting  AuthTokenUpdateStatusEnum = "SETTING"
	AuthTokenUpdateStatusEnumRotating AuthTokenUpdateStatusEnum = "ROTATING"
)
