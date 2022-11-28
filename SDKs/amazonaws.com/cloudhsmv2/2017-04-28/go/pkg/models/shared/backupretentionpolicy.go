package shared

// BackupRetentionPolicy
// A policy that defines the number of days to retain backups.
type BackupRetentionPolicy struct {
	Type  *BackupRetentionTypeEnum `json:"Type,omitempty"`
	Value *string                  `json:"Value,omitempty"`
}
