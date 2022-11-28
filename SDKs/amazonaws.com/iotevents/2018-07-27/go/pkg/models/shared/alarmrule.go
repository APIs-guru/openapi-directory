package shared

// AlarmRule
// Defines when your alarm is invoked.
type AlarmRule struct {
	SimpleRule *SimpleRule `json:"simpleRule,omitempty"`
}
