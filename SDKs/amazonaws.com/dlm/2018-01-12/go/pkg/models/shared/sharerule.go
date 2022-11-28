package shared

// ShareRule
// Specifies a rule for sharing snapshots across Amazon Web Services accounts.
type ShareRule struct {
	TargetAccounts      []string                         `json:"TargetAccounts"`
	UnshareInterval     *int64                           `json:"UnshareInterval,omitempty"`
	UnshareIntervalUnit *RetentionIntervalUnitValuesEnum `json:"UnshareIntervalUnit,omitempty"`
}
