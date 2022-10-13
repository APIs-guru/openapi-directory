package shared

type CreateArchiveRequest struct {
	ArchiveName    string  `json:"ArchiveName"`
	Description    *string `json:"Description"`
	EventPattern   *string `json:"EventPattern"`
	EventSourceArn string  `json:"EventSourceArn"`
	RetentionDays  *int64  `json:"RetentionDays"`
}
