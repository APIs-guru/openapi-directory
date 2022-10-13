package shared

type Predicate struct {
	Conditions []Condition  `json:"Conditions"`
	Logical    *LogicalEnum `json:"Logical"`
}
