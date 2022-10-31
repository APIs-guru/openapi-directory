package shared

type Predicate struct {
	Conditions []Condition  `json:"Conditions,omitempty"`
	Logical    *LogicalEnum `json:"Logical,omitempty"`
}
