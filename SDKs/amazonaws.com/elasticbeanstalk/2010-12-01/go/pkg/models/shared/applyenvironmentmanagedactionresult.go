package shared

// ApplyEnvironmentManagedActionResult
// The result message containing information about the managed action.
type ApplyEnvironmentManagedActionResult struct {
	ActionDescription *string
	ActionID          *string
	ActionType        *ActionTypeEnum
	Status            *string
}
