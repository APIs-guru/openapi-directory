package shared



type CreateDatastoreResponse struct {
    DatastoreArn *string `json:"datastoreArn,omitempty"`
    DatastoreName *string `json:"datastoreName,omitempty"`
    RetentionPeriod *RetentionPeriod `json:"retentionPeriod,omitempty"`
    
}

