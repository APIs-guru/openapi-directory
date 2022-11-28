package shared

type DeleteQueuedReservedInstancesErrorCodeEnum string

const (
	DeleteQueuedReservedInstancesErrorCodeEnumReservedInstancesIDInvalid        DeleteQueuedReservedInstancesErrorCodeEnum = "reserved-instances-id-invalid"
	DeleteQueuedReservedInstancesErrorCodeEnumReservedInstancesNotInQueuedState DeleteQueuedReservedInstancesErrorCodeEnum = "reserved-instances-not-in-queued-state"
	DeleteQueuedReservedInstancesErrorCodeEnumUnexpectedError                   DeleteQueuedReservedInstancesErrorCodeEnum = "unexpected-error"
)
