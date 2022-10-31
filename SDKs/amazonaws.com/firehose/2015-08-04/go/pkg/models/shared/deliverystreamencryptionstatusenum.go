package shared

type DeliveryStreamEncryptionStatusEnum string

const (
	DeliveryStreamEncryptionStatusEnumEnabled         DeliveryStreamEncryptionStatusEnum = "ENABLED"
	DeliveryStreamEncryptionStatusEnumEnabling        DeliveryStreamEncryptionStatusEnum = "ENABLING"
	DeliveryStreamEncryptionStatusEnumEnablingFailed  DeliveryStreamEncryptionStatusEnum = "ENABLING_FAILED"
	DeliveryStreamEncryptionStatusEnumDisabled        DeliveryStreamEncryptionStatusEnum = "DISABLED"
	DeliveryStreamEncryptionStatusEnumDisabling       DeliveryStreamEncryptionStatusEnum = "DISABLING"
	DeliveryStreamEncryptionStatusEnumDisablingFailed DeliveryStreamEncryptionStatusEnum = "DISABLING_FAILED"
)
