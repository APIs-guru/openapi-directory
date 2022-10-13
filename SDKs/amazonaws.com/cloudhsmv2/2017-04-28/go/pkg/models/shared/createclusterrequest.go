package shared

type CreateClusterRequest struct {
	BackupRetentionPolicy *BackupRetentionPolicy `json:"BackupRetentionPolicy"`
	HsmType               string                 `json:"HsmType"`
	SourceBackupID        *string                `json:"SourceBackupId"`
	SubnetIds             []string               `json:"SubnetIds"`
	TagList               []Tag                  `json:"TagList"`
}
