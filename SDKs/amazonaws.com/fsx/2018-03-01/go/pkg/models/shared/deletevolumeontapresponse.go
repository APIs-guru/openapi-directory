package shared

// DeleteVolumeOntapResponse
// The response object for the Amazon FSx for NetApp ONTAP volume being deleted in the <code>DeleteVolume</code> operation.
type DeleteVolumeOntapResponse struct {
	FinalBackupID   *string `json:"FinalBackupId,omitempty"`
	FinalBackupTags []Tag   `json:"FinalBackupTags,omitempty"`
}
