package shared

// PartialMatch
// The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason.
type PartialMatch struct {
	Reference              *string  `json:"Reference,omitempty"`
	TargetViolationReasons []string `json:"TargetViolationReasons,omitempty"`
}
