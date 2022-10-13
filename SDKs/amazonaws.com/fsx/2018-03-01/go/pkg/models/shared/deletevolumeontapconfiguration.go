package shared

type DeleteVolumeOntapConfiguration struct {
	FinalBackupTags []Tag `json:"FinalBackupTags"`
	SkipFinalBackup *bool `json:"SkipFinalBackup"`
}
