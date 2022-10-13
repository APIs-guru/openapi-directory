package shared

type DatastorePartition struct {
	AttributePartition *Partition          `json:"attributePartition"`
	TimestampPartition *TimestampPartition `json:"timestampPartition"`
}
