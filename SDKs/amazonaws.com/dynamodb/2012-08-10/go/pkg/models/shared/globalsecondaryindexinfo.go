package shared



type GlobalSecondaryIndexInfo struct {
    IndexName *string `json:"IndexName,omitempty"`
    KeySchema []KeySchemaElement `json:"KeySchema,omitempty"`
    Projection *Projection `json:"Projection,omitempty"`
    ProvisionedThroughput *ProvisionedThroughput `json:"ProvisionedThroughput,omitempty"`
    
}

