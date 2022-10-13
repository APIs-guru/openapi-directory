package shared

type AttemptRead struct {
	BytesSynced   *int64            `json:"bytesSynced"`
	CreatedAt     int64             `json:"createdAt"`
	EndedAt       *int64            `json:"endedAt"`
	ID            int64             `json:"id"`
	RecordsSynced *int64            `json:"recordsSynced"`
	Status        AttemptStatusEnum `json:"status"`
	UpdatedAt     int64             `json:"updatedAt"`
}
