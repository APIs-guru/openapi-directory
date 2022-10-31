package shared




type ContactStatusEnum string

const (
    ContactStatusEnumAvailable ContactStatusEnum = "AVAILABLE"
ContactStatusEnumAwsCancelled ContactStatusEnum = "AWS_CANCELLED"
ContactStatusEnumAwsFailed ContactStatusEnum = "AWS_FAILED"
ContactStatusEnumCancelled ContactStatusEnum = "CANCELLED"
ContactStatusEnumCancelling ContactStatusEnum = "CANCELLING"
ContactStatusEnumCompleted ContactStatusEnum = "COMPLETED"
ContactStatusEnumFailed ContactStatusEnum = "FAILED"
ContactStatusEnumFailedToSchedule ContactStatusEnum = "FAILED_TO_SCHEDULE"
ContactStatusEnumPass ContactStatusEnum = "PASS"
ContactStatusEnumPostpass ContactStatusEnum = "POSTPASS"
ContactStatusEnumPrepass ContactStatusEnum = "PREPASS"
ContactStatusEnumScheduled ContactStatusEnum = "SCHEDULED"
ContactStatusEnumScheduling ContactStatusEnum = "SCHEDULING"
)


