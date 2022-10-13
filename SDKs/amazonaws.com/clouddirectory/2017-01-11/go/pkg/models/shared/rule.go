package shared

type Rule struct {
	Parameters map[string]string `json:"Parameters"`
	Type       *RuleTypeEnum     `json:"Type"`
}
