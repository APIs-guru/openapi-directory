package shared

type CopyBackupToRegionRequest struct {
	BackupID          string `json:"BackupId"`
	DestinationRegion string `json:"DestinationRegion"`
	TagList           []Tag  `json:"TagList"`
}
