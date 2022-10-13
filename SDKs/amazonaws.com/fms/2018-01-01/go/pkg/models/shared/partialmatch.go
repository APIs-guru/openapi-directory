package shared

type PartialMatch struct {
	Reference              *string  `json:"Reference"`
	TargetViolationReasons []string `json:"TargetViolationReasons"`
}
