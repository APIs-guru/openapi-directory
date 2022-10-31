package shared

type ContinuousBackupsDescription struct {
	ContinuousBackupsStatus        ContinuousBackupsStatusEnum     `json:"ContinuousBackupsStatus"`
	PointInTimeRecoveryDescription *PointInTimeRecoveryDescription `json:"PointInTimeRecoveryDescription,omitempty"`
}
