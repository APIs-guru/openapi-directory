package shared

type ErrorCodeEnum string

const (
	ErrorCodeEnumResourceNotFoundException   ErrorCodeEnum = "ResourceNotFoundException"
	ErrorCodeEnumInvalidRequestException     ErrorCodeEnum = "InvalidRequestException"
	ErrorCodeEnumInternalFailureException    ErrorCodeEnum = "InternalFailureException"
	ErrorCodeEnumServiceUnavailableException ErrorCodeEnum = "ServiceUnavailableException"
	ErrorCodeEnumThrottlingException         ErrorCodeEnum = "ThrottlingException"
)
