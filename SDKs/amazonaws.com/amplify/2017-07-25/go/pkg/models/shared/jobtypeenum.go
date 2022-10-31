package shared

type JobTypeEnum string

const (
	JobTypeEnumRelease JobTypeEnum = "RELEASE"
	JobTypeEnumRetry   JobTypeEnum = "RETRY"
	JobTypeEnumManual  JobTypeEnum = "MANUAL"
	JobTypeEnumWebHook JobTypeEnum = "WEB_HOOK"
)
