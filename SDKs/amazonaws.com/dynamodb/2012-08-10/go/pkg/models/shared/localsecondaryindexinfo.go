package shared



type LocalSecondaryIndexInfo struct {
    IndexName *string `json:"IndexName,omitempty"`
    KeySchema []KeySchemaElement `json:"KeySchema,omitempty"`
    Projection *Projection `json:"Projection,omitempty"`
    
}

