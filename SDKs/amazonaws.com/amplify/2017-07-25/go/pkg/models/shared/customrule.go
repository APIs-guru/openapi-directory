package shared

type CustomRule struct {
	Condition *string `json:"condition"`
	Source    string  `json:"source"`
	Status    *string `json:"status"`
	Target    string  `json:"target"`
}
