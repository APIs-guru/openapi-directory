package shared

type AttachmentStateChange struct {
	AttachmentArn string `json:"attachmentArn"`
	Status        string `json:"status"`
}
