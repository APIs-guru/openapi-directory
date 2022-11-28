package shared

type ActivityStatusEnum string

const (
	ActivityStatusEnumError              ActivityStatusEnum = "error"
	ActivityStatusEnumPendingFulfillment ActivityStatusEnum = "pending_fulfillment"
	ActivityStatusEnumPendingTermination ActivityStatusEnum = "pending_termination"
	ActivityStatusEnumFulfilled          ActivityStatusEnum = "fulfilled"
)
