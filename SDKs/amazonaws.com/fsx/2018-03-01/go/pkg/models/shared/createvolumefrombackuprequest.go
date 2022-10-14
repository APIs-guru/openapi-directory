package shared

type CreateVolumeFromBackupRequest struct {
	BackupID           string                          `json:"BackupId"`
	ClientRequestToken *string                         `json:"ClientRequestToken,omitempty"`
	Name               string                          `json:"Name"`
	OntapConfiguration *CreateOntapVolumeConfiguration `json:"OntapConfiguration,omitempty"`
	Tags               []Tag                           `json:"Tags,omitempty"`
}
