package shared

// CustomRule
//
//	Describes a custom rewrite or redirect rule.
type CustomRule struct {
	Condition *string `json:"condition,omitempty"`
	Source    string  `json:"source"`
	Status    *string `json:"status,omitempty"`
	Target    string  `json:"target"`
}
