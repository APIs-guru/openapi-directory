package shared

// RemoveTargetsResultEntry
// Represents a target that failed to be removed from a rule.
type RemoveTargetsResultEntry struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
	TargetID     *string `json:"TargetId,omitempty"`
}
