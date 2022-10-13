package shared

type AttachmentItem struct {
	AttachmentID   *string             `json:"AttachmentId"`
	AttachmentName *string             `json:"AttachmentName"`
	ContentType    *string             `json:"ContentType"`
	Status         *ArtifactStatusEnum `json:"Status"`
}
