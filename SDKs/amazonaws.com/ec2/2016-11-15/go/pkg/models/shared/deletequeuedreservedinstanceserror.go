package shared

// DeleteQueuedReservedInstancesError
// Describes the error for a Reserved Instance whose queued purchase could not be deleted.
type DeleteQueuedReservedInstancesError struct {
	Code    *DeleteQueuedReservedInstancesErrorCodeEnum
	Message *string
}
