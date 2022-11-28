package shared

// DatastorePartitions
//
//	Contains information about the partition dimensions in a data store.
type DatastorePartitions struct {
	Partitions []DatastorePartition `json:"partitions,omitempty"`
}
