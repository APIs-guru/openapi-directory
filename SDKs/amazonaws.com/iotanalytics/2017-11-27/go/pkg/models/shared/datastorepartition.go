package shared

// DatastorePartition
//
//	A single dimension to partition a data store. The dimension must be an <code>AttributePartition</code> or a <code>TimestampPartition</code>.
type DatastorePartition struct {
	AttributePartition *Partition          `json:"attributePartition,omitempty"`
	TimestampPartition *TimestampPartition `json:"timestampPartition,omitempty"`
}
