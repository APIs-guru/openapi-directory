package shared

// UnsuccessfulItemError
// Information about the error that occurred. For more information about errors, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.
type UnsuccessfulItemError struct {
	Code    *string
	Message *string
}
