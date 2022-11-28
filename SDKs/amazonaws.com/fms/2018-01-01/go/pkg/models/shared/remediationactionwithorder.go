package shared

// RemediationActionWithOrder
// An ordered list of actions you can take to remediate a violation.
type RemediationActionWithOrder struct {
	Order             *int64             `json:"Order,omitempty"`
	RemediationAction *RemediationAction `json:"RemediationAction,omitempty"`
}
