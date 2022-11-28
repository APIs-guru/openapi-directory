package shared

type CustomMailFromStatusEnum string

const (
	CustomMailFromStatusEnumPending          CustomMailFromStatusEnum = "Pending"
	CustomMailFromStatusEnumSuccess          CustomMailFromStatusEnum = "Success"
	CustomMailFromStatusEnumFailed           CustomMailFromStatusEnum = "Failed"
	CustomMailFromStatusEnumTemporaryFailure CustomMailFromStatusEnum = "TemporaryFailure"
)
