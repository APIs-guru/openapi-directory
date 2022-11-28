package shared

type FailureTypeEnum string

const (
	FailureTypeEnumUpdateCancelled         FailureTypeEnum = "UpdateCancelled"
	FailureTypeEnumCancellationFailed      FailureTypeEnum = "CancellationFailed"
	FailureTypeEnumRollbackFailed          FailureTypeEnum = "RollbackFailed"
	FailureTypeEnumRollbackSuccessful      FailureTypeEnum = "RollbackSuccessful"
	FailureTypeEnumInternalFailure         FailureTypeEnum = "InternalFailure"
	FailureTypeEnumInvalidEnvironmentState FailureTypeEnum = "InvalidEnvironmentState"
	FailureTypeEnumPermissionsError        FailureTypeEnum = "PermissionsError"
)
