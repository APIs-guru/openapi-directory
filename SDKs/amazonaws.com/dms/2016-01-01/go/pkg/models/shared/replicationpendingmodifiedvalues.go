package shared

// ReplicationPendingModifiedValues
// Provides information about the values of pending modifications to a replication instance. This data type is an object of the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html"> <code>ReplicationInstance</code> </a> user-defined data type.
type ReplicationPendingModifiedValues struct {
	AllocatedStorage         *int64  `json:"AllocatedStorage,omitempty"`
	EngineVersion            *string `json:"EngineVersion,omitempty"`
	MultiAz                  *bool   `json:"MultiAZ,omitempty"`
	ReplicationInstanceClass *string `json:"ReplicationInstanceClass,omitempty"`
}
