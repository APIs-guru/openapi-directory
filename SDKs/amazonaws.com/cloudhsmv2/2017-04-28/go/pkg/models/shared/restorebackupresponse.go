package shared

type RestoreBackupResponse struct {
	Backup *Backup `json:"Backup,omitempty"`
}
