package shared

type BackupRetentionPolicy struct {
	Type  *BackupRetentionTypeEnum `json:"Type"`
	Value *string                  `json:"Value"`
}
