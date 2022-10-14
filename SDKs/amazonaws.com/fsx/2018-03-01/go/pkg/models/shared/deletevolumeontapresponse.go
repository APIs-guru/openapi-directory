package shared

type DeleteVolumeOntapResponse struct {
	FinalBackupID   *string `json:"FinalBackupId,omitempty"`
	FinalBackupTags []Tag   `json:"FinalBackupTags,omitempty"`
}
