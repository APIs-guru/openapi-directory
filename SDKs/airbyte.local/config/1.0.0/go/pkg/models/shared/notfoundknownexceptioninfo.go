package shared

type NotFoundKnownExceptionInfo struct {
	ExceptionClassName          *string  `json:"exceptionClassName"`
	ExceptionStack              []string `json:"exceptionStack"`
	ID                          *string  `json:"id"`
	Message                     string   `json:"message"`
	RootCauseExceptionClassName *string  `json:"rootCauseExceptionClassName"`
	RootCauseExceptionStack     []string `json:"rootCauseExceptionStack"`
}
