package shared



type CreateGlobalTableInput struct {
    GlobalTableName string `json:"GlobalTableName"`
    ReplicationGroup []Replica `json:"ReplicationGroup"`
    
}

