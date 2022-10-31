package shared



type ModifyClusterRequest struct {
    BackupRetentionPolicy BackupRetentionPolicy `json:"BackupRetentionPolicy"`
    ClusterID string `json:"ClusterId"`
    
}

