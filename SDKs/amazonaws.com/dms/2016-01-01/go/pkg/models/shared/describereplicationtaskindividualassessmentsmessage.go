package shared

// DescribeReplicationTaskIndividualAssessmentsMessage
// <p/>
type DescribeReplicationTaskIndividualAssessmentsMessage struct {
	Filters    []Filter `json:"Filters,omitempty"`
	Marker     *string  `json:"Marker,omitempty"`
	MaxRecords *int64   `json:"MaxRecords,omitempty"`
}
