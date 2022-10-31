package shared

type RetryActionEnum string

const (
	RetryActionEnumRetry RetryActionEnum = "RETRY"
	RetryActionEnumExit  RetryActionEnum = "EXIT"
)
