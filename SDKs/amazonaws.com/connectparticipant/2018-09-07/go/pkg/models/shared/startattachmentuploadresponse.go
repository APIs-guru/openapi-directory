package shared

type StartAttachmentUploadResponse struct {
	AttachmentID   *string         `json:"AttachmentId,omitempty"`
	UploadMetadata *UploadMetadata `json:"UploadMetadata,omitempty"`
}
