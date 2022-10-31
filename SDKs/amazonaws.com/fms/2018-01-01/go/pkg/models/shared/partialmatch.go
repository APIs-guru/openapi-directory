package shared

type PartialMatch struct {
	Reference              *string  `json:"Reference,omitempty"`
	TargetViolationReasons []string `json:"TargetViolationReasons,omitempty"`
}
