package shared

// DescribeTableStatisticsResponse
// <p/>
type DescribeTableStatisticsResponse struct {
	Marker             *string           `json:"Marker,omitempty"`
	ReplicationTaskArn *string           `json:"ReplicationTaskArn,omitempty"`
	TableStatistics    []TableStatistics `json:"TableStatistics,omitempty"`
}
