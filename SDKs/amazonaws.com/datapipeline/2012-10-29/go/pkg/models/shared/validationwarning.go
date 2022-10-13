package shared

type ValidationWarning struct {
	ID       *string  `json:"id"`
	Warnings []string `json:"warnings"`
}
