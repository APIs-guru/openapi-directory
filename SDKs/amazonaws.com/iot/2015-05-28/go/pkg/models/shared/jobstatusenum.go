package shared




type JobStatusEnum string

const (
    JobStatusEnumInProgress JobStatusEnum = "IN_PROGRESS"
JobStatusEnumCanceled JobStatusEnum = "CANCELED"
JobStatusEnumCompleted JobStatusEnum = "COMPLETED"
JobStatusEnumDeletionInProgress JobStatusEnum = "DELETION_IN_PROGRESS"
)


