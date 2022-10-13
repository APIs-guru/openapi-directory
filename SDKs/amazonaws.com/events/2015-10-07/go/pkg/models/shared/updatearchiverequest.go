package shared

type UpdateArchiveRequest struct {
	ArchiveName   string  `json:"ArchiveName"`
	Description   *string `json:"Description"`
	EventPattern  *string `json:"EventPattern"`
	RetentionDays *int64  `json:"RetentionDays"`
}
