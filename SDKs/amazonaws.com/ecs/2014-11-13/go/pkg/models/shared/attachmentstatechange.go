package shared

// AttachmentStateChange
// An object representing a change in state for a task attachment.
type AttachmentStateChange struct {
	AttachmentArn string `json:"attachmentArn"`
	Status        string `json:"status"`
}
