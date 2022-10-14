package shared

type Rule struct {
	Parameters map[string]string `json:"Parameters,omitempty"`
	Type       *RuleTypeEnum     `json:"Type,omitempty"`
}
