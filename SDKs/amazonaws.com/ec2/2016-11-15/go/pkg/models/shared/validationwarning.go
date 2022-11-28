package shared

// ValidationWarning
// The error codes and error messages that are returned for the parameters or parameter combinations that are not valid when a new launch template or new version of a launch template is created.
type ValidationWarning struct {
	Errors []ValidationError
}
