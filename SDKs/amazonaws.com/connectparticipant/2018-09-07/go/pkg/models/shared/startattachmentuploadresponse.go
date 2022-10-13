package shared

type StartAttachmentUploadResponse struct {
	AttachmentID   *string         `json:"AttachmentId"`
	UploadMetadata *UploadMetadata `json:"UploadMetadata"`
}
