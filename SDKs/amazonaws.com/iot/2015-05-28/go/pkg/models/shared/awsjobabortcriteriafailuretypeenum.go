package shared

type AwsJobAbortCriteriaFailureTypeEnum string

const (
	AwsJobAbortCriteriaFailureTypeEnumFailed   AwsJobAbortCriteriaFailureTypeEnum = "FAILED"
	AwsJobAbortCriteriaFailureTypeEnumRejected AwsJobAbortCriteriaFailureTypeEnum = "REJECTED"
	AwsJobAbortCriteriaFailureTypeEnumTimedOut AwsJobAbortCriteriaFailureTypeEnum = "TIMED_OUT"
	AwsJobAbortCriteriaFailureTypeEnumAll      AwsJobAbortCriteriaFailureTypeEnum = "ALL"
)
