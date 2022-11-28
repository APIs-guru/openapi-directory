package shared

// DeleteVolumeOntapConfiguration
// Use to specify skipping a final backup, or to add tags to a final backup.
type DeleteVolumeOntapConfiguration struct {
	FinalBackupTags []Tag `json:"FinalBackupTags,omitempty"`
	SkipFinalBackup *bool `json:"SkipFinalBackup,omitempty"`
}
