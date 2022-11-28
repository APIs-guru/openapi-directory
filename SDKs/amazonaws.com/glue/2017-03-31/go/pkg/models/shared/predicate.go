package shared

// Predicate
// Defines the predicate of the trigger, which determines when it fires.
type Predicate struct {
	Conditions []Condition  `json:"Conditions,omitempty"`
	Logical    *LogicalEnum `json:"Logical,omitempty"`
}
