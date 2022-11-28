package shared

type ActionTypeEnum string

const (
	ActionTypeEnumInstanceRefresh ActionTypeEnum = "InstanceRefresh"
	ActionTypeEnumPlatformUpdate  ActionTypeEnum = "PlatformUpdate"
	ActionTypeEnumUnknown         ActionTypeEnum = "Unknown"
)
