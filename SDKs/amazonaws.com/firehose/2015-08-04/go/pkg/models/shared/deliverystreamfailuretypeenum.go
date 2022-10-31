package shared

type DeliveryStreamFailureTypeEnum string

const (
	DeliveryStreamFailureTypeEnumRetireKmsGrantFailed      DeliveryStreamFailureTypeEnum = "RETIRE_KMS_GRANT_FAILED"
	DeliveryStreamFailureTypeEnumCreateKmsGrantFailed      DeliveryStreamFailureTypeEnum = "CREATE_KMS_GRANT_FAILED"
	DeliveryStreamFailureTypeEnumKmsAccessDenied           DeliveryStreamFailureTypeEnum = "KMS_ACCESS_DENIED"
	DeliveryStreamFailureTypeEnumDisabledKmsKey            DeliveryStreamFailureTypeEnum = "DISABLED_KMS_KEY"
	DeliveryStreamFailureTypeEnumInvalidKmsKey             DeliveryStreamFailureTypeEnum = "INVALID_KMS_KEY"
	DeliveryStreamFailureTypeEnumKmsKeyNotFound            DeliveryStreamFailureTypeEnum = "KMS_KEY_NOT_FOUND"
	DeliveryStreamFailureTypeEnumKmsOptInRequired          DeliveryStreamFailureTypeEnum = "KMS_OPT_IN_REQUIRED"
	DeliveryStreamFailureTypeEnumCreateEniFailed           DeliveryStreamFailureTypeEnum = "CREATE_ENI_FAILED"
	DeliveryStreamFailureTypeEnumDeleteEniFailed           DeliveryStreamFailureTypeEnum = "DELETE_ENI_FAILED"
	DeliveryStreamFailureTypeEnumSubnetNotFound            DeliveryStreamFailureTypeEnum = "SUBNET_NOT_FOUND"
	DeliveryStreamFailureTypeEnumSecurityGroupNotFound     DeliveryStreamFailureTypeEnum = "SECURITY_GROUP_NOT_FOUND"
	DeliveryStreamFailureTypeEnumEniAccessDenied           DeliveryStreamFailureTypeEnum = "ENI_ACCESS_DENIED"
	DeliveryStreamFailureTypeEnumSubnetAccessDenied        DeliveryStreamFailureTypeEnum = "SUBNET_ACCESS_DENIED"
	DeliveryStreamFailureTypeEnumSecurityGroupAccessDenied DeliveryStreamFailureTypeEnum = "SECURITY_GROUP_ACCESS_DENIED"
	DeliveryStreamFailureTypeEnumUnknownError              DeliveryStreamFailureTypeEnum = "UNKNOWN_ERROR"
)
