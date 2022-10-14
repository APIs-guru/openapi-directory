package shared

type DescribeTableStatisticsResponse struct {
	Marker             *string           `json:"Marker,omitempty"`
	ReplicationTaskArn *string           `json:"ReplicationTaskArn,omitempty"`
	TableStatistics    []TableStatistics `json:"TableStatistics,omitempty"`
}
