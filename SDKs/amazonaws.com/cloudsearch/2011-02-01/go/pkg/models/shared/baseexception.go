package shared

// BaseException
// An error occurred while processing the request.
type BaseException struct {
	Code    *string
	Message *string
}
