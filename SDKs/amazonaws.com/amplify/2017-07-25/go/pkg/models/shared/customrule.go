package shared

type CustomRule struct {
	Condition *string `json:"condition,omitempty"`
	Source    string  `json:"source"`
	Status    *string `json:"status,omitempty"`
	Target    string  `json:"target"`
}
