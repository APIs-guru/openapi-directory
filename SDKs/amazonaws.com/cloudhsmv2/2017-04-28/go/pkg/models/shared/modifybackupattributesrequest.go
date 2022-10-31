package shared



type ModifyBackupAttributesRequest struct {
    BackupID string `json:"BackupId"`
    NeverExpires bool `json:"NeverExpires"`
    
}

