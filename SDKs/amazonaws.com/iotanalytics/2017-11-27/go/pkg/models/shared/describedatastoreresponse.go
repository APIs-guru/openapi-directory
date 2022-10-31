package shared

type DescribeDatastoreResponse struct {
	Datastore  *Datastore           `json:"datastore,omitempty"`
	Statistics *DatastoreStatistics `json:"statistics,omitempty"`
}
