package shared

// ValidationMessage
// An error or warning for a desired configuration option value.
type ValidationMessage struct {
	Message    *string
	Namespace  *string
	OptionName *string
	Severity   *ValidationSeverityEnum
}
