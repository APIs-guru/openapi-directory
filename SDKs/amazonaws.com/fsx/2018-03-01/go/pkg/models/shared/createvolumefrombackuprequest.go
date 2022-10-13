package shared

type CreateVolumeFromBackupRequest struct {
	BackupID           string                          `json:"BackupId"`
	ClientRequestToken *string                         `json:"ClientRequestToken"`
	Name               string                          `json:"Name"`
	OntapConfiguration *CreateOntapVolumeConfiguration `json:"OntapConfiguration"`
	Tags               []Tag                           `json:"Tags"`
}
