package shared

type RetryBuildBatchTypeEnum string

const (
	RetryBuildBatchTypeEnumRetryAllBuilds    RetryBuildBatchTypeEnum = "RETRY_ALL_BUILDS"
	RetryBuildBatchTypeEnumRetryFailedBuilds RetryBuildBatchTypeEnum = "RETRY_FAILED_BUILDS"
)
