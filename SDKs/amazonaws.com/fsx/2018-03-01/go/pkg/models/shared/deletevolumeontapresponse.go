package shared

type DeleteVolumeOntapResponse struct {
	FinalBackupID   *string `json:"FinalBackupId"`
	FinalBackupTags []Tag   `json:"FinalBackupTags"`
}
