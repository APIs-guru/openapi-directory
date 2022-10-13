package shared

type DescribeDatastoreResponse struct {
	Datastore  *Datastore           `json:"datastore"`
	Statistics *DatastoreStatistics `json:"statistics"`
}
