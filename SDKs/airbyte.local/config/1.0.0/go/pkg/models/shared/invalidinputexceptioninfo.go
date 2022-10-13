package shared

type InvalidInputExceptionInfo struct {
	ExceptionClassName *string                `json:"exceptionClassName"`
	ExceptionStack     []string               `json:"exceptionStack"`
	Message            string                 `json:"message"`
	ValidationErrors   []InvalidInputProperty `json:"validationErrors"`
}
