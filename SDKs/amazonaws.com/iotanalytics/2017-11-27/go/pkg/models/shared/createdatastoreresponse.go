package shared

type CreateDatastoreResponse struct {
	DatastoreArn    *string          `json:"datastoreArn"`
	DatastoreName   *string          `json:"datastoreName"`
	RetentionPeriod *RetentionPeriod `json:"retentionPeriod"`
}
