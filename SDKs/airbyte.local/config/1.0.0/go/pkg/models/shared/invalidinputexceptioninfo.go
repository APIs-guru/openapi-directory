package shared

type InvalidInputExceptionInfo struct {
	ExceptionClassName *string                `json:"exceptionClassName,omitempty"`
	ExceptionStack     []string               `json:"exceptionStack,omitempty"`
	Message            string                 `json:"message"`
	ValidationErrors   []InvalidInputProperty `json:"validationErrors"`
}
