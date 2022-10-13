package shared

type BackfillErrorCodeEnum string

const (
	BackfillErrorCodeEnumEncryptedPartitionError            BackfillErrorCodeEnum = "ENCRYPTED_PARTITION_ERROR"
	BackfillErrorCodeEnumInternalError                      BackfillErrorCodeEnum = "INTERNAL_ERROR"
	BackfillErrorCodeEnumInvalidPartitionTypeDataError      BackfillErrorCodeEnum = "INVALID_PARTITION_TYPE_DATA_ERROR"
	BackfillErrorCodeEnumMissingPartitionValueError         BackfillErrorCodeEnum = "MISSING_PARTITION_VALUE_ERROR"
	BackfillErrorCodeEnumUnsupportedPartitionCharacterError BackfillErrorCodeEnum = "UNSUPPORTED_PARTITION_CHARACTER_ERROR"
)
