package shared



type DeleteBackupResponse struct {
    BackupID *string `json:"BackupId,omitempty"`
    Lifecycle *BackupLifecycleEnum `json:"Lifecycle,omitempty"`
    
}

