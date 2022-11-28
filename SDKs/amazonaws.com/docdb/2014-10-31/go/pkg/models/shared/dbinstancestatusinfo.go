package shared

// DbInstanceStatusInfo
// Provides a list of status information for an instance.
type DbInstanceStatusInfo struct {
	Message    *string
	Normal     *bool
	Status     *string
	StatusType *string
}
