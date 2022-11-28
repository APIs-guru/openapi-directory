package shared

// FailedScheduledUpdateGroupActionRequest
// Describes a scheduled action that could not be created, updated, or deleted.
type FailedScheduledUpdateGroupActionRequest struct {
	ErrorCode           *string
	ErrorMessage        *string
	ScheduledActionName string
}
