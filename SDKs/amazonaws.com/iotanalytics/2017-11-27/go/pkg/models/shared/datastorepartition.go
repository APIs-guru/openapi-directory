package shared



type DatastorePartition struct {
    AttributePartition *Partition `json:"attributePartition,omitempty"`
    TimestampPartition *TimestampPartition `json:"timestampPartition,omitempty"`
    
}

