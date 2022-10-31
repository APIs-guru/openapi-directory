package shared

type CreateClusterRequest struct {
	BackupRetentionPolicy *BackupRetentionPolicy `json:"BackupRetentionPolicy,omitempty"`
	HsmType               string                 `json:"HsmType"`
	SourceBackupID        *string                `json:"SourceBackupId,omitempty"`
	SubnetIds             []string               `json:"SubnetIds"`
	TagList               []Tag                  `json:"TagList,omitempty"`
}
