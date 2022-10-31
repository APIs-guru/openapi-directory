package shared



type RestoreTableFromBackupInput struct {
    BackupArn string `json:"BackupArn"`
    BillingModeOverride *BillingModeEnum `json:"BillingModeOverride,omitempty"`
    GlobalSecondaryIndexOverride []GlobalSecondaryIndex `json:"GlobalSecondaryIndexOverride,omitempty"`
    LocalSecondaryIndexOverride []LocalSecondaryIndex `json:"LocalSecondaryIndexOverride,omitempty"`
    ProvisionedThroughputOverride *ProvisionedThroughput `json:"ProvisionedThroughputOverride,omitempty"`
    SseSpecificationOverride *SseSpecification `json:"SSESpecificationOverride,omitempty"`
    TargetTableName string `json:"TargetTableName"`
    
}

