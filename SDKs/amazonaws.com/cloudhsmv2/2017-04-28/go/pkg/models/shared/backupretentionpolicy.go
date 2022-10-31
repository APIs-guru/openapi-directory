package shared



type BackupRetentionPolicy struct {
    Type *BackupRetentionTypeEnum `json:"Type,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

