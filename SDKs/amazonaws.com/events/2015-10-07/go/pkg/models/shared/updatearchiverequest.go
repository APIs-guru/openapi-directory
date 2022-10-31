package shared

type UpdateArchiveRequest struct {
	ArchiveName   string  `json:"ArchiveName"`
	Description   *string `json:"Description,omitempty"`
	EventPattern  *string `json:"EventPattern,omitempty"`
	RetentionDays *int64  `json:"RetentionDays,omitempty"`
}
