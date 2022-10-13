package shared

type ReplicationPendingModifiedValues struct {
	AllocatedStorage         *int64  `json:"AllocatedStorage"`
	EngineVersion            *string `json:"EngineVersion"`
	MultiAz                  *bool   `json:"MultiAZ"`
	ReplicationInstanceClass *string `json:"ReplicationInstanceClass"`
}
