package shared

// DatastoreActivity
// The datastore activity that specifies where to store the processed data.
type DatastoreActivity struct {
	DatastoreName string `json:"datastoreName"`
	Name          string `json:"name"`
}
