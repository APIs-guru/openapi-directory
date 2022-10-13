package shared

type ListDatastoresResponse struct {
	DatastoreSummaries []DatastoreSummary `json:"datastoreSummaries"`
	NextToken          *string            `json:"nextToken"`
}
