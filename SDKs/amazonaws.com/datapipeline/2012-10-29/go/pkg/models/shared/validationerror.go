package shared

type ValidationError struct {
	Errors []string `json:"errors"`
	ID     *string  `json:"id"`
}
