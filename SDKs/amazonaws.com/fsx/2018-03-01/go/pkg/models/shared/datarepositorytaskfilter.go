package shared

// DataRepositoryTaskFilter
// (Optional) An array of filter objects you can use to filter the response of data repository tasks you will see in the the response. You can filter the tasks returned in the response by one or more file system IDs, task lifecycles, and by task type. A filter object consists of a filter <code>Name</code>, and one or more <code>Values</code> for the filter.
type DataRepositoryTaskFilter struct {
	Name   *DataRepositoryTaskFilterNameEnum `json:"Name,omitempty"`
	Values []string                          `json:"Values,omitempty"`
}
