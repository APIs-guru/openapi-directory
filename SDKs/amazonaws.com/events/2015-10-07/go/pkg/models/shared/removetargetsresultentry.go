package shared

type RemoveTargetsResultEntry struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
	TargetID     *string `json:"TargetId,omitempty"`
}
