package shared



type GlobalSecondaryIndexDescription struct {
    Backfilling *bool `json:"Backfilling,omitempty"`
    IndexArn *string `json:"IndexArn,omitempty"`
    IndexName *string `json:"IndexName,omitempty"`
    IndexSizeBytes *int64 `json:"IndexSizeBytes,omitempty"`
    IndexStatus *IndexStatusEnum `json:"IndexStatus,omitempty"`
    ItemCount *int64 `json:"ItemCount,omitempty"`
    KeySchema []KeySchemaElement `json:"KeySchema,omitempty"`
    Projection *Projection `json:"Projection,omitempty"`
    ProvisionedThroughput *ProvisionedThroughputDescription `json:"ProvisionedThroughput,omitempty"`
    
}

