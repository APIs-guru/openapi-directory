package shared

type FailureException struct {
	ExceptionDescription *string `json:"ExceptionDescription"`
	ExceptionName        *string `json:"ExceptionName"`
}
