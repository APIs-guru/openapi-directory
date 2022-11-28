package shared

// PutTargetsResultEntry
// Represents a target that failed to be added to a rule.
type PutTargetsResultEntry struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
	TargetID     *string `json:"TargetId,omitempty"`
}
