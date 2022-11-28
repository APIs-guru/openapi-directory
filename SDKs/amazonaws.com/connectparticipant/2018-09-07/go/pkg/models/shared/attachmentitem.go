package shared

// AttachmentItem
// The case-insensitive input to indicate standard MIME type that describes the format of the file that will be uploaded.
type AttachmentItem struct {
	AttachmentID   *string             `json:"AttachmentId,omitempty"`
	AttachmentName *string             `json:"AttachmentName,omitempty"`
	ContentType    *string             `json:"ContentType,omitempty"`
	Status         *ArtifactStatusEnum `json:"Status,omitempty"`
}
