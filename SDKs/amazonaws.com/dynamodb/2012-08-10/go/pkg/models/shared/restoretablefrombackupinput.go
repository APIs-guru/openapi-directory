package shared

type RestoreTableFromBackupInput struct {
	BackupArn                     string                 `json:"BackupArn"`
	BillingModeOverride           *BillingModeEnum       `json:"BillingModeOverride"`
	GlobalSecondaryIndexOverride  []GlobalSecondaryIndex `json:"GlobalSecondaryIndexOverride"`
	LocalSecondaryIndexOverride   []LocalSecondaryIndex  `json:"LocalSecondaryIndexOverride"`
	ProvisionedThroughputOverride *ProvisionedThroughput `json:"ProvisionedThroughputOverride"`
	SseSpecificationOverride      *SseSpecification      `json:"SSESpecificationOverride"`
	TargetTableName               string                 `json:"TargetTableName"`
}
