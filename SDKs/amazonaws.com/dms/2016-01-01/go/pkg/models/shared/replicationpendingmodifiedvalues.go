package shared



type ReplicationPendingModifiedValues struct {
    AllocatedStorage *int64 `json:"AllocatedStorage,omitempty"`
    EngineVersion *string `json:"EngineVersion,omitempty"`
    MultiAz *bool `json:"MultiAZ,omitempty"`
    ReplicationInstanceClass *string `json:"ReplicationInstanceClass,omitempty"`
    
}

