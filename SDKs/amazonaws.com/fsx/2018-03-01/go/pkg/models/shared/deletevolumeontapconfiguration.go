package shared

type DeleteVolumeOntapConfiguration struct {
	FinalBackupTags []Tag `json:"FinalBackupTags,omitempty"`
	SkipFinalBackup *bool `json:"SkipFinalBackup,omitempty"`
}
