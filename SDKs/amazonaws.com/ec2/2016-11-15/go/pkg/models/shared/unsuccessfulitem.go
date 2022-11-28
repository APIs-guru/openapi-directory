package shared

// UnsuccessfulItem
// Information about items that were not successfully processed in a batch call.
type UnsuccessfulItem struct {
	Error      *UnsuccessfulItemError
	ResourceID *string
}
