package shared

// ContinuousBackupsDescription
// Represents the continuous backups and point in time recovery settings on the table.
type ContinuousBackupsDescription struct {
	ContinuousBackupsStatus        ContinuousBackupsStatusEnum     `json:"ContinuousBackupsStatus"`
	PointInTimeRecoveryDescription *PointInTimeRecoveryDescription `json:"PointInTimeRecoveryDescription,omitempty"`
}
