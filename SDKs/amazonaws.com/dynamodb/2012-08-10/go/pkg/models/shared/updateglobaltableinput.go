package shared



type UpdateGlobalTableInput struct {
    GlobalTableName string `json:"GlobalTableName"`
    ReplicaUpdates []ReplicaUpdate `json:"ReplicaUpdates"`
    
}

