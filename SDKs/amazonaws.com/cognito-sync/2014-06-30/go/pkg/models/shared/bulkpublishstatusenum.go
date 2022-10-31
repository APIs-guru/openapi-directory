package shared




type BulkPublishStatusEnum string

const (
    BulkPublishStatusEnumNotStarted BulkPublishStatusEnum = "NOT_STARTED"
BulkPublishStatusEnumInProgress BulkPublishStatusEnum = "IN_PROGRESS"
BulkPublishStatusEnumFailed BulkPublishStatusEnum = "FAILED"
BulkPublishStatusEnumSucceeded BulkPublishStatusEnum = "SUCCEEDED"
)


