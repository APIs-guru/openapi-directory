package shared

type AttachmentItem struct {
	AttachmentID   *string             `json:"AttachmentId,omitempty"`
	AttachmentName *string             `json:"AttachmentName,omitempty"`
	ContentType    *string             `json:"ContentType,omitempty"`
	Status         *ArtifactStatusEnum `json:"Status,omitempty"`
}
