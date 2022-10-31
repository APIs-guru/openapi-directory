package shared

type NotFoundKnownExceptionInfo struct {
	ExceptionClassName          *string  `json:"exceptionClassName,omitempty"`
	ExceptionStack              []string `json:"exceptionStack,omitempty"`
	ID                          *string  `json:"id,omitempty"`
	Message                     string   `json:"message"`
	RootCauseExceptionClassName *string  `json:"rootCauseExceptionClassName,omitempty"`
	RootCauseExceptionStack     []string `json:"rootCauseExceptionStack,omitempty"`
}
